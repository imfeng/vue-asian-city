<template>
  <footer id="footer">
    <div class="cpy-right text-center">
      <p>Copyright &copy; {{year}}. 南韩娱乐网 All rights reserved. korea7227.com.</p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>