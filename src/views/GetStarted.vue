<template lang="pug">
#get-started
	transition(name='fade' mode='out-in')
		router-view/
</template>

<style lang="scss">
#get-started {
	h2 span {
		vertical-align: middle;
	}
	.b-tooltip .hljs {
		cursor: pointer;
	}
}
</style>
