<template>
  <div class="container">
    <h1>My Surveys</h1>
    <div class="col-lg-12">
      <SurveyList ></SurveyList>
    </div>
  </div>
</template>
<style>
.jumbotron ul {
  font-size: 21px;
}
</style>
<script setup>
  import SurveyList from "@/components/SurveyList.vue";
</script>