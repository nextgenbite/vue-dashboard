<template lang="">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Link Bank Account Name</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <form>
          <div class="form-group">
            <label for="my-select">Bank Name:</label>
            <select id="my-select" class="form-control" name="">
              <option value="" class="text-muted">Please Select a Bank </option>
              <option >Payoneer</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Account Number:</label>
            <input type="text"  class="form-control" name="" id="">
          </div>
        </form>
      </div>
      <div class="modal-footer text-center">
        <button class="btn btn-1 btn-lg col-md-12" >Proceed</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Modal',
  
}
</script>
<style lang="">
    
</style>