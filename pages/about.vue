<template>
  <div class="about-wrap">
    <link rel="stylesheet" href="/css/quill.core.css" />
    <link rel="stylesheet" href="/css/quill.snow.css" />
    <link rel="stylesheet" href="/css/quill.bubble.css" />
    <div class="head">
      <!-- <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" /> -->
      <img :src="aboutImg" alt="" />
      <span class="head-title">About Us</span>
    </div>
    <div class="about-content" v-loading="state.loading">
      <el-affix :offset="100" class="left hidden-md-and-down" style="z-index: 2">
        <div>
          <div class="link-wrap">
            <h2>Get Social</h2>
            <div class="icon-wrap">
              <a href="//www.youtube.com/@jinzuan">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youtube"></use>
                </svg>
              </a>
              <a href="//www.pinterest.com/jzcut/">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pinterestpinterest30"></use>
                </svg>
              </a>
              <a href="//www.facebook.com/jzcut">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
              <a href="//instagram.com/jz_cut">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-instagram"></use>
                </svg>
              </a>
            </div>
          </div>
          <div class="link-wrap">
            <h2>Phone / WhatsApp</h2>
            <div class="icon-wrap phone">
              <a
                href="//wa.me/8618117002521?text=Hello, I+am+Alexis+Ye+from+Zhengzhou+Jinzuan+Diamond+Tools+Co.,+Ltd.+Welcome+to+your+inquiry."
              >
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-whatsapp"></use>
                </svg>
              </a>
              <a
                href="//wa.me/8618117002521?text=Hello, I+am+Alexis+Ye+from+Zhengzhou+Jinzuan+Diamond+Tools+Co.,+Ltd.+Welcome+to+your+inquiry."
              >
                +86 18117002521
              </a>
            </div>
            <div class="icon-wrap phone">
              <a href="tel:8618117002521">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tel"></use>
                </svg>
              </a>
              <a href="tel:8618117002521">+86 18117002521</a>
            </div>
          </div>
          <div class="link-wrap">
            <h2>Email</h2>
            <div class="icon-wrap phone">
              <a href="mailto:cartroyal@gmail.com">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-email"></use>
                </svg>
              </a>
              <a href="mailto:cartroyal@gmail.com">cartroyal@gmail.com</a>
            </div>
          </div>
        </div>
      </el-affix>
      <!-- <div class="left-div"></div> -->
      <div class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/about">About</NuxtLink></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="r-content">
          <el-row>
            <el-col :md="12">
              <div class="content-item">
                <iframe
                  class="i-video"
                  src="https://www.youtube.com/embed/mB5TmCE7di0"
                  title="This is Zhengzhou, a city with humanity you can't forget as soon as you come."
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </el-col>
            <el-col :md="12" v-for="(item, index) in state.aboutList" :key="index">
              <div v-if="item.type === 'article'" class="content-item">
                <h3 class="resume-title">{{ item.title }}</h3>
                <p class="resume-content">
                  {{ item.content }}
                </p>
              </div>
              <div v-if="item.type === 'img'" class="content-item">
                <img class="resume-img" :src="item.img" alt="" />
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import aboutImg from '~/assets/about.jpg'
import about1Img from '~/assets/about1.jpg'
import about2Img from '~/assets/about2.jpg'
import about3Img from '~/assets/about3.jpg'
import about4Img from '~/assets/about4.png'
import about5Img from '~/assets/about5.jpg'
const state = reactive({
  aboutList: [
    {
      type: 'article',
      title: 'Originated from Zhengzhou',
      content:
        'As the capital of Henan Province, Zhengzhou has a population of over 12 million and a history of at least 4000 years, making it an important birthplace of Chinese civilization. Zhengzhou is currently one of the main producing and gathering areas for superhard materials in China, and the artificial diamonds produced in Zhengzhou are renowned worldwide.'
    },
    {
      type: 'article',
      title: 'Experience since 2008',
      content: `Zhengzhou Jinzuan Diamond Tools Co., Ltd. is an enterprise integrating scientific research, production and sales.
      Our company has been engaged in the development and production of superhard diamond/CBN tools for more than ten years.
      The main products are diamond cutting wheels, ultra-thin cutting wheels, resin grinding wheels, etc. Diamond/CBN cutting discs and grinding wheels are critical to production processes in various industries including precision machining, tool and mold, ceramics, electronics, photonics and optics. The company supplies high-quality cut-off wheels for precision groove grinding, grooving, cutting, and single and combination cutting operations to many industries around the world.`
    },
    {
      type: 'img',
      img: about1Img
    },
    {
      type: 'img',
      img: about2Img
    },
    {
      type: 'article',
      title: 'Our Equipment',
      content: `We obtain the higher efficiency and the better product quality by constantly updating the equipment.`
    },
    {
      type: 'article',
      title: 'Our Exhibition',
      content: `By participating in online or offline exhibitions, we continue to meet new customers, broaden our horizons, and improve product competitiveness and international popularity. We have participated in many industry-related exhibitions, including 5th and 6th China Zhengzhou International Abrasives & Grinding Exposition, 2023 China International Exhibition for Powder Metallurgy, Cemented Carbides and Advanced Ceramics etc., and will continue to participate in domestic or foreign exhibitions. Please pay attention to the news for details.`
    },
    {
      type: 'img',
      img: about3Img
    },
    {
      type: 'img',
      img: about4Img
    },
    {
      type: 'article',
      title: 'Our Advantages',
      content: `The main technical backbone of the company has been in the abrasives industry for more than 20 years, has accumulated a lot of technical experience, uses the latest equipment, learns from the latest achievements of science and technology, and constantly develops new products to meet the complex and changing market demand. The company's product specifications cover a wide area, and can be customized with a variety of sizes, abrasive particle size, concentration and other parameters. The company has strong processing capabilities, and the average monthly output can reach 15,000 pieces. We can quickly complete production tasks in a short time.`
    },
    {
      type: 'article',
      title: 'Our Team',
      content: `The JINZUAN team is made up of dedicated, excellence-oriented professionals with the focused goal of producing client specific, effective products at a fair market price. Our reputation for quality, reliability and service is unsurpassed. Every customer, regardless of size, is treated with the same individualized attention. Each customer has direct access to an experienced technical professional to answer specific questions and address any product or application issue that may arise.`
    },
    {
      type: 'img',
      img: about5Img
    }
  ]
})
</script>
<style lang="scss" scoped>
.about-wrap {
  .head {
    position: relative;
    .head-title {
      color: #fff;
      font-size: 0.5rem;
      font-weight: 600;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      width: 100%;
    }
  }
  .about-content {
    margin: 0 1rem;
    padding: 0.1rem 0;
    display: flex;
    .left {
      flex-shrink: 0;
      width: 200px;
      .link-wrap {
        margin-right: 0.1rem;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid #ebebeb;
        h2 {
          font-size: 16px;
          color: #666;
        }
        .icon-wrap {
          .icon {
            font-size: 20px;
            margin: 0 0.05rem;
            color: #9b9b9b;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              color: #ffbf6c;
            }
          }
        }
        .phone {
          display: flex;
          align-items: center;
          margin-bottom: 0.05rem;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            &:hover {
              text-decoration: underline;
              color: #ffbf6c;
            }
          }
          .icon {
            color: #ffc107;
          }
        }
      }
    }
    .right {
      box-sizing: border-box;
      width: calc(100% - 200px);
      flex-grow: 1;
      padding: 0.1rem;
      .bread-wrap {
        margin-bottom: 0.1rem;
      }
      .r-content {
        .el-col {
          margin-bottom: 0.1rem;
        }
        .content-item {
          width: 90%;
          margin: 0 auto;
          .i-video {
            width: 100%;
            height: 300px;
          }
          .resume-title {
          }
          .resume-content {
            line-height: 2;
            color: #9b9b9b;
          }
          .resume-img {
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .about-content {
      margin: 0;
    }
  }
}
</style>
