<script>
import AppHeader from './components/AppHeader.vue';
import RestaurantList from './components/RestaurantList.vue';


export default {
	data() {
		return {
			title: "Hello World",
		};
	},

	components: {
		AppHeader, RestaurantList
	}
};
</script>

<template>
	<AppHeader />
	<div>
		<router-view></router-view>
	</div>
</template>

<style lang="scss" scoped>
//SCSS
</style>
