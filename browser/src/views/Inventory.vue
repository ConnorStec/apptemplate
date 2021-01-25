<template>
  <div class="inventory">
    <h1>This is an inventory page</h1>
    <div v-for="listing in listings" :key="listing.id">
      <Listing :listing="listing" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Listing from "@/components/Listing.vue";

export default {
  name: "Inventory",
  components: {
    Listing
  },
  data: function() {
    return {
      listings: [{ id: 1 }, { id: 2 }]
    };
  },
  mounted: function() {
    console.log("mounted", this.listings);
    const dis = this;
    this.$http
      .get("/api/listings")
      .then(function(response) {
        dis.listings = response.data;
      })
      .catch(err => {
        console.error("got err", err);
      });
  }
};
</script>
