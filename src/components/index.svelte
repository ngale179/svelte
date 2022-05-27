<script>
  import { Router, Route } from 'svelte-navigator';
  import User from '../components/user/index.svelte';
  import editUser from '../components/user/edit.svelte';
</script>

<Router>
    <div class="main">
        <Route path="/" component={User} />
        <Route path="edit" component={editUser} />
    </div>
</Router>
