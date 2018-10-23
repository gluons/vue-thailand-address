<template lang="pug">
#api
	transition(name='fade' mode='out-in')
		router-view/
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'API'
})
export default class API extends Vue {}
</script>
