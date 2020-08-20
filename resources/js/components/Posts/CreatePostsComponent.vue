<template>
    <div class="container-fluid">
            <!-- Page Heading -->
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Posts</h1>
                <router-link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                        to="/posts">
                    Back</router-link>
            </div>

          <!-- Content Row -->
          <div class="card shadow mb-4">
            <div class="card-body">
                <h1>Create A Post</h1>
                <form @submit.prevent="addPost">
                <div class="row">
                    <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Title:</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                        <label>Post Body:</label>
                        <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                        </div>
                    </div>
                    </div><br />
                    <div class="form-group">
                    <button class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
        let uri = 'http://127.0.0.1:8000/api/post/create';
        // console.log(this.post,uri);
        this.axios.post(uri, this.post).then((response) => {
            // console.log('Hy there. Im back');
             this.$router.push({name: 'posts'});
        });
    }
    }
  }
</script>