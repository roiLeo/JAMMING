
<template>
	<nav class="pagination" role="navigation" aria-label="pagination">
		<a class="pagination-previous"
		v-if="meta_data.currentPage > 1"
		@click="onChange(meta_data.currentPage - 1)">&larr; Previous</a>

		<a class="pagination-next"
		v-if="size > 1 && meta_data.currentPage < size"
		@click="onChange(meta_data.currentPage + 1)">Next &rarr;</a>

		<ul class="pagination-list">
		  <component v-for="element in elements"
		  :is="element.type"
		  :key="element.page"
		  :page="element.page"
		  :current="meta_data.currentPage"
		  :onChange="onChange"/>
		</ul>
	</nav>
</template>

<script>
	import Page from './Page.vue'
	import EllipseBreak from './EllipseBreak.vue'

	export default {
		name: 'pagination',
		components: { Page, EllipseBreak },
		// props: ['meta_data', 'onChange'],
		props: {
		  meta_data: {
		    type: Object
		  },
		  onChange: {
		    type: Function
		  }
		},
		data () {
			return {
				elements: [],
				size: 0
			}
		},
		mounted () {
			this.paginate()
		},
		watch: {
			meta_data: {
				// Check for changes in meta_data resulting from asynchronous operations
				handler(val) {
					this.paginate()
				},
				deep: true
			}
		},
		methods: {
			add (s, f) {
				for (var i = s; i < f; i++) {
					this.elements.push(
						{ type: 'page', page: i }
						)
				}
			},
			first () {
				// Add first page with separator
				this.elements.push(
					{ type: 'page', page: 1 },
					{ type: 'ellipse-break' }
					)
			},
			last () {
				// Add last page with separator
				this.elements.push(
					{ type: 'ellipse-break' },
					{ type: 'page', page: this.size },
					)
			},
			paginate () {
				this.elements = []
				this.size = Math.ceil(this.meta_data.total/this.meta_data.perPage)

				if (this.size < this.meta_data.step * 2 + 6) {
					// Case without any ellipse breaks
					this.add(1, this.size + 1);
				} else if (this.meta_data.currentPage < this.meta_data.step * 2 + 1) {
					// Case with ellipse breaks at end
					this.add(1, this.meta_data.step * 2 + 4);
					this.last();
				} else if (this.meta_data.currentPage > this.size - this.meta_data.step * 2) {
					// Case with ellipse breaks at beginning
					this.first();
					this.add(this.size - this.meta_data.step * 2 - 2, this.size + 1);
				} else {
					// Case with ellipse breaks at beginning and end
					this.first();
					this.add(this.meta_data.currentPage - this.meta_data.step, this.meta_data.currentPage + this.meta_data.step + 1);
					this.last();
				}
			}
		}
	}
</script>
