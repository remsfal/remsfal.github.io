<template>
  <div class="menu-background">
    <header>
      <Menubar :model="items">
        <template #start>
          <div @click="$router.push('/')">
            <img alt="logo" src="@/assets/logo.png" height="30" class="logo" />
          </div>
        </template>
        <template #end>
          <Button label="Zur remsfal Cloud" @click="$router.push('/')" />
        </template>
      </Menubar>
    </header>
  </div>
</template>

<style scoped>
.menu-background {
  background-color: var(--color-background-logo);
  background-image: -webkit-gradient(linear, left top, right top, from(var(--color-background-logo)), to(var(--color-theme-tertiary)));
  background-image: -webkit-linear-gradient(left, var(--color-background-logo), var(--color-theme-tertiary));
  background-image: -moz-linear-gradient(left, var(--color-background-logo), var(--color-theme-tertiary));
  background-image: -ms-linear-gradient(left, var(--color-background-logo), var(--color-theme-tertiary));
  background-image: -o-linear-gradient(left, var(--color-background-logo), var(--color-theme-tertiary));
  background-image: linear-gradient(left, var(--color-background-logo), var(--color-theme-tertiary));
}
.p-button {
  background: var(--color-background-logo);
  margin-right: 100px;
}
.logo {
  margin-left: 100px;
  margin-right: 30px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .logo {
    margin-left: 20px;
  }
  .p-button {
    margin-right: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [

      ]
    };
  }
};
</script>
