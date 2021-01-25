<template>
  <div>
    <h3>Here's some listing info</h3>
    <div>{{ listing.id }}</div>
  </div>
</template>

<script>
export default {
  name: 'Listing',
  props: {
    listing: Object
  }
}
</script>
