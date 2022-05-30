<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import User from '../components/user/index.svelte';
  import Blog from '../components/blog/index.svelte';
</script>

<Router>
    <nav>
        <Link to="/">Home /</Link>
        <Link to="user">User /</Link>
        <Link to="blog">Blog</Link>
    </nav>

    <div class="main">
        <Route path="/">
            <p>HOME</p>
        </Route>
        <Route path="user" component={User} />
        <Route path="blog" component={Blog} />
    </div>
</Router>
