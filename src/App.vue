<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style >
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
button,input{
  outline: none;

}
img{
  display: block;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
a,button,input,i{
  -webkit-tap-highlight-color: rbga(0,0,0,0);
}
</style>
