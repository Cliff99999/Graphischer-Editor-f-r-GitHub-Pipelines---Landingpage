
<script>

  import Banner from "./Components/Banner/Banner.svelte";
  import Services from "./Components/Services/Services.svelte";
  import About from "./Components/About/About.svelte";
  import Testimonials from "./Components/Testimonials/Testimonials.svelte";
  import Social from "./Components/Social/Social.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import DATA from "./Data/data";
</script>



<Banner bannerData={DATA.BANNER_DATA} />

<Services serviceData={DATA.SERVICE_DATA} />

<About aboutData={DATA.ABOUT_DATA} />

<Testimonials testimonialData={DATA.TESTIMONIAL_DATA} />

<Social socialData={DATA.SOCIAL_DATA} />

<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
