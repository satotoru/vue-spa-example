<template>
  <div id="nav-bar">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand to="/">{{title}}</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/coordinate">座標</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    title: String
  },
}
</script>

