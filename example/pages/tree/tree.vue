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
    <section class="demo-section">
      <h4>点击标题展开节点</h4>
      <h5>设置属性 expand-node，在点击节点标题时，会展开/收起子节点。</h5>
      <div>
        <x-tree :data="data1" expand-node></x-tree>
      </div>
    </section>
    <section class="demo-section">
      <h4>异步加载子节点</h4>
      <h5>使用 load-data 属性可以异步加载子节点，需要给数据增加 loading 来标识当前是否在加载中。<br/>
        load-data 第一个参数为当前节点信息；执行 load-data 的第二个参数，将需要添加的数据传入。<br/>
        如果某节点不包含 loading 和 children 字段，则不会应用异步加载效果。</h5>
      <div>
        <x-tree :data="data3" :load-data="loadData" show-checkbox></x-tree>
      </div>
    </section>
    <section class="demo-section">
      <h4>默认展开、选中、勾选和禁用</h4>
      <h5>给节点设置 expand、selected、checked 和 disabled 可以将节点设置为展开、选中、勾选和禁用。<br/>
        设置属性 multiple 可进行多选。</h5>
      <div>
        <x-tree :data="data4" show-checkbox multiple></x-tree>
      </div>
    </section>
    <section class="demo-section">
      <h4>自定义节点内容 </h4>
      <h5>使用强大的 Render 函数可以自定义节点显示内容和交互，比如添加图标，按钮等。<br/>
        Render 函数的第二个参数，包含三个字段：<br/>
        root &lt;Array&gt;：树的根节点<br/>
        node &lt;Object&gt;：当前节点<br/>
        data &lt;Object&gt;：当前节点的数据<br/>
        通过合理地使用 root、node 和 data 可以实现各种效果，其中，iView 给每个节点都设置了一个 nodeKey 字段，用来标识节点的 id。<br/>
        Render 函数分两种，一种是给当前树的每个节点都设置同样的渲染内容，此 render 通过 Tree 组件的属性 render 传递；另一种是单独给某个节点设置，在该节点的 render
        字段内设置；同时设置时，会优先使用当前节点的 Render 函数。</h5>
      <div>
        <x-tree :data="data5" :render="renderContent" class="demo-tree-render"></x-tree>
      </div>
    </section>
    <section class="demo-section">
      <h4>右键菜单</h4>
      <h5>节点数据开启字段 contextmenu，可以配合 slot contextMenu 实现点击右键弹出菜单。</h5>
      <div>
        <x-tree :data="data6" @on-contextmenu="handleContextMenu">
          <template slot="contextMenu">
            <x-dropdown-item @click.native="handleContextMenuEdit">编辑</x-dropdown-item>
            <x-dropdown-item @click.native="handleContextMenuDelete" style="color: #ed4014">删除</x-dropdown-item>
          </template>
        </x-tree>
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
      ],
      data3: [
        {
          title: 'parent',
          loading: false,
          children: []
        }
      ],
      data4: [
        {
          title: 'parent 1',
          expand: true,
          selected: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  disabled: true
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
                  title: 'leaf 1-2-1',
                  checked: true
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      data5: [
        {
          title: 'parent 1',
          expand: true,
          render: (h, { root, node, data }) => {
            return h('span', {
              style: {
                display: 'inline-block',
                width: '100%'
              }
            }, [
              h('span', [
                h('i', {
                  class: 'ans-icon-folder-empty',
                  style: {
                    marginRight: '8px'
                  }
                }),
                h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  float: 'right',
                  marginRight: '32px'
                }
              }, [
                h('xButton', {
                  props: Object.assign({}, this.buttonProps, {
                    icon: 'ans-icon-increase',
                    type: 'primary'
                  }),
                  style: {
                    width: '88px'
                  },
                  on: {
                    click: () => {
                      this.append(data)
                    }
                  }
                })
              ])
            ])
          },
          children: [
            {
              title: 'child 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'ghost',
        size: 'small'
      },
      data6: [
        {
          title: 'parent 1',
          expand: true,
          contextmenu: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              contextmenu: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  contextmenu: true
                },
                {
                  title: 'leaf 1-1-2',
                  contextmenu: true
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              contextmenu: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  contextmenu: true
                },
                {
                  title: 'leaf 1-2-1',
                  contextmenu: true
                }
              ]
            }
          ]
        }
      ],
      contextData: null
    }
  },
  methods: {
    loadData (item, callback) {
      setTimeout(() => {
        const data = [
          {
            title: 'children',
            loading: false,
            children: []
          },
          {
            title: 'children',
            loading: false,
            children: []
          }
        ]
        callback(data)
      }, 1000)
    },
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('i', {
            class: 'ans-icon-document',
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('xButton', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ans-icon-increase'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => {
                this.append(data)
              }
            }
          }),
          h('xButton', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ans-icon-reduce'
            }),
            on: {
              click: () => {
                this.remove(root, node, data)
              }
            }
          })
        ])
      ])
    },
    append (data) {
      const children = data.children || []
      children.push({
        title: 'appended node',
        expand: true
      })
      this.$set(data, 'children', children)
    },
    remove (root, node, data) {
      const parentKey = root.find(el => el === node).parent
      const parent = root.find(el => el.nodeKey === parentKey).node
      const index = parent.children.indexOf(data)
      parent.children.splice(index, 1)
    },
    handleContextMenu (data) {
      this.contextData = data
    },
    handleContextMenuEdit () {
      this.$message.info('Click edit of' + this.contextData.title)
    },
    handleContextMenuDelete () {
      this.$message.info('Click delete of' + this.contextData.title)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .demo-tree-render .ans-tree-title {
    width: 100%;
  }
</style>
