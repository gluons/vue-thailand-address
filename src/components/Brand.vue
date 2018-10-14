<template lang="pug">
router-link(to='/').brand
	Icon(custom='flag-icon flag-icon-th' size='30')
	span Vue Thailand Address
</template>

<style lang="scss" scoped>
a.brand {
	color: #fff;
	font-size: 1.3rem;
	font-weight: bold;
	line-height: 60px;
	position: relative;
	float: left;
	width: auto;
	height: 60px;
	padding: 0 1rem;
	z-index: 1000;

	&:hover {
		color: yellow;
	}
	i {
		margin-right: .5rem;
	}
	span {
		vertical-align: middle;
	}
}
</style>
