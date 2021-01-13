<template>
  <div class="gird-example">
    <section class="demo-section">
      <h4>基本用法</h4>
      <h5>水平排列的布局。col必须放在row里面。</h5>
      <div>
        <x-row>
          <x-col span="12">col-12</x-col>
          <x-col span="12">col-12</x-col>
        </x-row>
        <br>
        <x-row>
          <x-col span="8">col-8</x-col>
          <x-col span="8">col-8</x-col>
          <x-col span="8">col-8</x-col>
        </x-row>
        <br>
        <x-row>
          <x-col span="6">col-6</x-col>
          <x-col span="6">col-6</x-col>
          <x-col span="6">col-6</x-col>
          <x-col span="6">col-6</x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>区块间隔</h4>
      <h5>通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。</h5>
      <div>
        <x-row :gutter="16">
          <x-col span="6">
            <div>col-6</div>
          </x-col>
          <x-col span="6">
            <div>col-6</div>
          </x-col>
          <x-col span="6">
            <div>col-6</div>
          </x-col>
          <x-col span="6">
            <div>col-6</div>
          </x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>栅格顺序(Flex) </h4>
      <h5>通过 Flex 布局的order来改变栅格的顺序。</h5>
      <div>
        <x-row type="flex">
          <x-col span="6" order="4">1 | order-4</x-col>
          <x-col span="6" order="3">2 | order-3</x-col>
          <x-col span="6" order="2">3 | order-2</x-col>
          <x-col span="6" order="1">4 | order-1</x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>栅格顺序</h4>
      <h5>通过设置push和pull来改变栅格的顺序。</h5>
      <div>
        <x-row>
          <x-col span="18" push="6">col-18 | push-6</x-col>
          <x-col span="6" pull="18">col-6 | pull-18</x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>左右偏移</h4>
      <h5>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</h5>
      <div>
        <x-row>
          <x-col span="8">col-8</x-col>
          <x-col span="8" offset="8">col-8 | offset-8</x-col>
        </x-row>
        <br>
        <x-row>
          <x-col span="6" offset="8">col-6 | offset-8</x-col>
          <x-col span="6" offset="4">col-6 | offset-4</x-col>
        </x-row>
        <br>
        <x-row>
          <x-col span="12" offset="8">col-12 | offset-8</x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>Flex布局</h4>
      <h5>通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。</h5>
      <div>
        <p>子元素向左排列</p>
        <x-row type="flex" justify="start" class="code-row-bg">
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
        </x-row>
        <p>子元素向右排列</p>
        <x-row type="flex" justify="end" class="code-row-bg">
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
        </x-row>
        <p>子元素居中排列</p>
        <x-row type="flex" justify="center" class="code-row-bg">
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
        </x-row>
        <p>子元素等宽排列</p>
        <x-row type="flex" justify="space-between" class="code-row-bg">
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
        </x-row>
        <p>子元素分散排列</p>
        <x-row type="flex" justify="space-around" class="code-row-bg">
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
          <x-col span="4">col-4</x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>Flex对齐</h4>
      <h5>通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。</h5>
      <div>
        <p>顶部对齐</p>
        <x-row type="flex" justify="center" align="top" class="code-row-bg">
          <x-col span="4"><p style="height: 80px">col-4</p></x-col>
          <x-col span="4"><p style="height: 30px">col-4</p></x-col>
          <x-col span="4"><p style="height: 100px">col-4</p></x-col>
          <x-col span="4"><p style="height: 60px">col-4</p></x-col>
        </x-row>
        <p>底部对齐</p>
        <x-row type="flex" justify="center" align="bottom" class="code-row-bg">
          <x-col span="4"><p style="height: 80px">col-4</p></x-col>
          <x-col span="4"><p style="height: 30px">col-4</p></x-col>
          <x-col span="4"><p style="height: 100px">col-4</p></x-col>
          <x-col span="4"><p style="height: 60px">col-4</p></x-col>
        </x-row>
        <p>居中对齐</p>
        <x-row type="flex" justify="center" align="middle" class="code-row-bg">
          <x-col span="4"><p style="height: 80px">col-4</p></x-col>
          <x-col span="4"><p style="height: 30px">col-4</p></x-col>
          <x-col span="4"><p style="height: 100px">col-4</p></x-col>
          <x-col span="4"><p style="height: 60px">col-4</p></x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>响应式布局 </h4>
      <h5>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl，详见 API。 调整浏览器尺寸来查看效果。</h5>
      <div>
        <x-row>
          <x-col :xs="2" :sm="4" :md="6" :lg="8">x-col</x-col>
          <x-col :xs="20" :sm="16" :md="12" :lg="8">x-col</x-col>
          <x-col :xs="2" :sm="4" :md="6" :lg="8">x-col</x-col>
        </x-row>
      </div>
    </section>
    <section class="demo-section">
      <h4>其它属性的响应式 </h4>
      <h5>span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs="6" 相当于 :xs="{ span: 6 }"。</h5>
      <div>
        <x-row>
          <x-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">x-col</x-col>
          <x-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">x-col</x-col>
          <x-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">x-col</x-col>
        </x-row>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .gird-example {
    .ans-col {
      color: #fff;
      padding: 10px 0;
      text-align: center;
      background: rgba(0,153,229,.9);
    }

    .ans-col:nth-child(odd) {
      background: rgba(0,153,229,.7);
    }

    .code-row-bg {
      background: rgba(0,0,0,.05);
    }
  }

</style>
