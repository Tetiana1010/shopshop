<template>
	<main>
		<h1>Messages Management</h1>
		<MessageList />
	</main>
</template>

<script lang="ts">
	import MessageList from '../components/MessageList.vue';
	export default {
		name: 'MessagesManagementView',
		components: {
      MessageList,
    }
	}
</script>
