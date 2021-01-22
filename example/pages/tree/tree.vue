<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <h5>最简单的用法，展示可选中，默认展开功能。</h5>
      <div>
        <x-tree :data="data1"></x-tree>
      </div>
    </section>
    <section class="demo-section">
      <h4>可勾选</h4>
      <h5>设置属性 show-checkbox 可以对节点进行勾选。</h5>
      <div>
        <x-tree :data="data2" show-checkbox></x-tree>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      data1: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss"></style>
