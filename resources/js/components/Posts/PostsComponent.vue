<template>
    <div class="container-fluid">
            <!-- Page Heading -->
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Posts</h1>
                <router-link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                        to="/create/post">
                    Add Posts</router-link>
            </div>

          <!-- Content Row -->
          <div class="card shadow mb-4">
          <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered dataTable" id="" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Post Body</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>{{ post.body }}</td>
                            <td>
                                <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>                                <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button></td>
                        </tr>
                    </tbody>
              </table>
          </div>
          </div>
          </div>
        </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      
      created() {
      let uri = 'http://127.0.0.1:8000/api/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data.data;
      });
    },
    methods: {
      deletePost(id)
      {
          confirm('Are you sure you want to delete this post !');
        let uri = `http://127.0.0.1:8000/api/post/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    },
  }
//   $('.dataTable').DataTable();
</script>