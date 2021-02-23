<template>
  <DonorCrud :donor="donor"/>
</template>

<script>
import DonorCrud from "@/components/DonorCrud";
import axios from "axios";

export default {
  name: "EditDonor",
  components: {
    DonorCrud
  },
  data() {
    return {
      donor: {},
    }
  },
  mounted() {
    axios.get('/donor/' + this.$route.params.id).then(response => (this.donor = response.data.data)).catch((error) => {
      console.log(error.response.data);

    });

  }


}


</script>

