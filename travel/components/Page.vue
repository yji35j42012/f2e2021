<style scoped></style>

<template>
	<ul class="page">
		<li
			:class="['page_prev', nowpage == 1 ? '_disabled' : '']"
			@click="changePage('--')"
		>
			<i class="icon_arrow">
				<svg viewBox="0 0 16 16">
					<path :d="icon_all.arrow" />
				</svg>
			</i>
		</li>
		<li
			:class="['page_li', nowpage == index + 1 ? 'on' : '']"
			v-for="(item, index) in maxpage"
			:key="index"
			@click="changePage(index + 1)"
		>
			{{ index + 1 }}
		</li>

		<li
			:class="['page_next', nowpage == maxpage ? '_disabled' : '']"
			@click="changePage('++')"
		>
			<i class="icon_arrow">
				<svg viewBox="0 0 16 16">
					<path :d="icon_all.arrow" />
				</svg>
			</i>
		</li>
	</ul>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
		};
	},
	props: ["maxpage", "nowpage"],

	methods: {
		changePage(str) {
			this.$emit("changepage", str);
		},
	},
};
</script>
