export default {
    template: `
    <div class="container">
    <h1>Header</h1>
    <nav>
        <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
        </ul>
    </nav>
    <router-link :to="{path: '/login'}" class="link">Login</router-link>
    </div>
    `,
  };
  
  