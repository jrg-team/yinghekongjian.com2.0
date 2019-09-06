<template>
	<header>
		<nav class="black-navigator pc">
			<div class="content">
				<i class="iconfont hcsp-icon-white"></i>
				<a href="#"><span class="active">硬核空间</span></a>
				<a href="#"><span>饥人谷</span></a>
				<a href="#"><span>写代码啦</span></a>
				<a href="#"><span>河马社区</span></a>
			</div>
		</nav>
		<nav class="white-navigator pc">
			<div class="content">
				<a href="#">
					<h5>硬核空间</h5>
				</a>
				<div class="items">
					<a href="#">介绍</a>
					<a href="../detail.html">课程详情</a>
					<a href="../projects.html">教学模式</a>
					<a href="../mode.html">真实的故事</a>
					<a href="../about.html">关于我们</a>
				</div>
			</div>
		</nav>
		<nav class="navigator mobile" @touchmove.prevent>
			<div class="icon-wrapper">
				<i class="iconfont hcsp-zhankai" @click="toggleModalVisible"></i>
				<div class="logo">
					<i class="iconfont hcsp-icon-white"></i>
				</div>
			</div>
			<transition name="menu">
				<section class="black-modal" v-show="modalVisible">
					<div class="items-wrapper">
						<ul>
							<li v-for="(item,index) in node" :class="{active: item.expanded}">
								<a :href="item.link || 'javascript:void(0);'" @click="toggleSubmenu(index)">{{item.title}}</a>
								<transition name="submenu">
									<ul v-if="item.expanded && item.children && item.children.length > 0">
										<li v-for="child in item.children">
											<a :href="child.link">{{child.title}}</a>
										</li>
									</ul>
								</transition>
							</li>
						</ul>
					</div>
				</section>
			</transition>
		</nav>
	</header>
</template>
<script>
	export default {
		name: 'MyNavigator',
		data() {
			return {
				modalVisible: false,
				node: [
					{
						title: '硬核空间',
						expanded: true,
						children: [
							{
								title: '介绍',
								link: '#',
							}, {
								title: '课程详情',
								link: '#'
							}, {
								title: '教学模式',
								link: '#'
							}, {
								title: '真实的故事',
								link: '#'
							}, {
								title: '关于我们',
								link: '#'
							}
						]
					},
					{
						title: '饥人谷',
						expanded: false,
						children: []
					},
					{
						title: '写代码啦',
						expanded: false,
						link: 'https://xiedaimala.com'
					},
					{
						title: '饥人谷',
						expanded: false,
						link: 'https://xiedaimala.com/bbs'
					}
				]
			}
		},
		methods: {
			toggleModalVisible() {
				this.modalVisible = !this.modalVisible
			},
			toggleSubmenu(index) {
				if (this.node[index].children && this.node[index].children.length > 0) {
					this.node[index].expanded = !this.node[index].expanded
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../css/navigator.scss';
</style>