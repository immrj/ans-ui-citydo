<template>
    <div :class="itemClasses">
        <div :class="headerClasses" @click="toggle">
            <i :class="iconClasses" v-if="!hideArrow"></i>
            <slot></slot>
        </div>
        <collapse-transition v-if="mounted">
            <div :class="contentClasses" v-show="isActive">
                <div :class="boxClasses"><slot name="content"></slot></div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import CollapseTransition from './CollapseTransition';
    import { LIB_NAME } from '../../../../src/util/constants'
    const prefixCls = `${LIB_NAME}-collapse`

    export default {
        name: 'xPanel',
        components: { CollapseTransition },
        props: {
            name: {
                type: String
            },
            hideArrow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                index: 0, // use index for default when name is null
                isActive: false,
                mounted: false
            };
        },
        computed: {
            itemClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.isActive
                    }
                ];
            },
            headerClasses () {
                return `${prefixCls}-header`;
            },
            contentClasses () {
                return `${prefixCls}-content`;
            },
            boxClasses () {
                return `${prefixCls}-content-box`;
            },
            iconClasses() {
                return `${LIB_NAME}-icon-arrow-right`;
            }
        },
        methods: {
            toggle () {
                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive
                });
            }
        },
        mounted () {
            this.mounted = true;
            this.$parent.setActive();
        }
    };
</script>
