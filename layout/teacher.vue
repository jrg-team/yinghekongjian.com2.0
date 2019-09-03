<template>
	<section class="teacher-wrapper">
		<swiper :options="teacherSwiperOption" ref="swiperImages">
			<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
				<div class="image-wrapper">
					<img src="../assets/teacher.png" :alt="slide.name"/>
				</div>
			</swiper-slide>
		</swiper>
		<div class="tab-wrapper">
			<swiper :options="tabsSwiperOption" ref="swiperTabs" class="tab">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<div>{{slide.name}}</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="article-wrapper">
			<transition name="fade">
				<article v-for="(slide, index) in swiperSlides" :key="index" v-if="index === activeIndex">
					<div v-html="slide.introduction" class="teacher-introduction"/>
				</article>
			</transition>
		</div>
	</section>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'

	export default {
		name: 'teacher',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperSlides: [{
					name: '张博',
					introduction: `<h3>张博</h3><h6>上海</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, cupiditate earum enim explicabo facere incidunt, iusto magnam nesciunt, nostrum odio praesentium qui reiciendis repellendus sed similique tempora velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur et fugiat illum in molestiae nostrum nulla, omnis possimus reprehenderit sint soluta voluptatibus. Beatae inventore iure numquam pariatur veniam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dicta distinctio exercitationem hic ipsa itaque nam officia soluta tempora.</p>`,
					image: "../assets/teacher.png"
				}, {
					name: '无隅',
					introduction: `<h3>无隅</h3><h6>上海</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, cupiditate earum enim explicabo facere incidunt, iusto magnam nesciunt, nostrum odio praesentium qui reiciendis repellendus sed similique tempora velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur et fugiat illum in molestiae nostrum nulla, omnis possimus reprehenderit sint soluta voluptatibus. Beatae inventore iure numquam pariatur veniam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dicta distinctio exercitationem hic ipsa itaque nam officia soluta tempora.</p>`,
					image: "../assets/teacher.png"
				}, {
					name: 'Alex',
					introduction: `<h3>Alex</h3><h6>上海</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, cupiditate earum enim explicabo facere incidunt, iusto magnam nesciunt, nostrum odio praesentium qui reiciendis repellendus sed similique tempora velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur et fugiat illum in molestiae nostrum nulla, omnis possimus reprehenderit sint soluta voluptatibus. Beatae inventore iure numquam pariatur veniam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dicta distinctio exercitationem hic ipsa itaque nam officia soluta tempora.</p>`,
					image: "../assets/teacher.png"
				}],
				activeIndex: 0,
				teacherSwiperOption: {},
				tabsSwiperOption: {
					slidesPerView: 3,
					centeredSlides: true,
					touchRatio: 0.2,
					slideToClickedSlide: true,
					virtualTranslate: true,
					on: {
						slideChange: () => {
							if (this.tabSwiper) this.activeIndex = this.tabSwiper.activeIndex
						}
					}
				}
			}
		},
		computed: {
			tabSwiper() {
				return this.$refs.swiperTabs.swiper
			}
		},
		mounted() {
			this.$nextTick(() => {
				const swiperImages = this.$refs.swiperImages.swiper
				const swiperTabs = this.$refs.swiperTabs.swiper
				swiperImages.controller.control = swiperTabs
				swiperTabs.controller.control = swiperImages
			})
		}
	}
</script>

<style lang="scss">
	section.teacher-wrapper {
		.image-wrapper {
			img {
				width: 100%;
				vertical-align: middle;
			}
		}
		.tab-wrapper {
			max-width: 1200px;
			position: relative;
			&::after {
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				width: 100%;
				background-color: #C9C9C9;
				height: 1px;
			}
			margin: 0 auto;
			.tab {
				max-width: 800px;
				position: relative;
				margin: 0 auto;
				.swiper-slide {
					height: 100%;
					opacity: 0.4;
					text-align: center;
					font-size: 20px;
					height: 60px;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}
				.swiper-slide-active {
					opacity: 1;
					border-bottom: 1px solid #3475C6;
				}
			}
		}
		.article-wrapper {
			max-width: 60vw;
			position: relative;
			margin: 0 auto;
			.fade-enter-active {
				transition: opacity .5s;
			}
			.fade-enter /* .fade-leave-active below version 2.1.8 */
			{
				opacity: 0;
			}
			.fade-leave-active {
				display: none;
			}
			article > .teacher-introduction {
				h3, h6 {
					max-width: 40vw;
					position: relative;
					margin: 0 auto;
					text-align: center;
				}
				h3 {
					margin-top: 20px;
				}
				h6, p {
					margin-top: 30px;
				}
				padding: 30px 0;
			}
		}
		padding-bottom: 10vh;
	}
</style>