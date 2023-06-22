import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  // Redirect to "/demo" route
  const redirectToDemo = () => {
    router.push("/demo");
  };
  return (
    <>
      <Head>
        <>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <link rel="preconnect" href="https://cdn.ampproject.org/" />
          <link rel="dns-prefetch" href="https://cdn.ampproject.org/" />
          <link href="./base.css" rel="stylesheet" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta
            name="description"
            content="Reimagine how social media can grow your business with FIght Cyber Bully. See our social media management tools in action. Start your own free trial today."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="FIght Cyber Bully: Social Media Management Solutions"
          />
          <meta
            property="og:description"
            content="Reimagine how social media can grow your business with FIght Cyber Bully. See our social media management tools in action. Start your own free trial today."
          />
          <meta property="og:url" content="https://sproutsocial.com/" />
          <meta property="og:site_name" content="FIght Cyber Bully" />
          <meta
            property="article:modified_time"
            content="2023-04-12T17:24:41+00:00"
          />
          <meta
            property="og:image"
            content="https://media.sproutsocial.com/uploads/Sprout-Home-2021-Open-Graph@2x-1.png"
          />
          <meta property="og:image:width" content={"2048"} />
          <meta property="og:image:height" content={"1076"} />
          <meta property="og:image:type" content="image/png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="facebook-domain-verification"
            content="diri2y0cro799an05ydexogembelg3"
          />
          <meta
            name="generator"
            content="AMP Plugin v2.4.1; mode=transitional"
          />
          <meta
            name="msapplication-TileImage"
            content="https://media.sproutsocial.com/uploads/cropped-leaf-270x270.png"
          />
          <link rel="preconnect" href="https://media.sproutsocial.com/" />
          <link rel="preconnect" href="https://lookup.getbambu.com/" />
          <link rel="preconnect" href="https://logx.optimizely.com/" />
          <link rel="dns-prefetch" href="https://cdn.optimizely.com/" />
          <link rel="dns-prefetch" href="https://media.sproutsocial.com/" />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/recoleta/Recoleta-SemiBold.eot#iefix"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/proxima/2021/ProximaNova-Regular.eot?#iefix"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/proxima/2021/ProximaNova-Bold.eot?#iefix"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/proxima/2021/ProximaNova-Extrabld.eot?#iefix"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="./Sprout Social_ Social Media Management Solutions_files/18179512350.js.download"
            as="script"
          />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/proxima/2021/ProximaNova-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/proxima/2021/ProximaNova-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://media.sproutsocial.com/font/proxima/2021/ProximaNova-Extrabld.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="shortcut icon"
            href="https://media.sproutsocial.com/uploads/favicon_2015-07-29.ico"
          />
          <link
            rel="icon"
            sizes="196x196"
            href="https://media.sproutsocial.com/uploads/196_-_android.png"
          />
          <link
            rel="icon"
            href="https://media.sproutsocial.com/uploads/cropped-leaf-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="https://media.sproutsocial.com/uploads/cropped-leaf-192x192.png"
            sizes="192x192"
          />
          <link href="./custom.css" rel="stylesheet" />
          <link rel="canonical" href="https://sproutsocial.com/" />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://sproutsocial.com/"
          />
          <link
            rel="alternate"
            hrefLang="es"
            href="https://sproutsocial.com/es/"
          />
          <link
            rel="alternate"
            hrefLang="pt"
            href="https://sproutsocial.com/pt/"
          />
          <link
            rel="alternate"
            hrefLang="it"
            href="https://sproutsocial.com/it/"
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href="https://sproutsocial.com/fr/"
          />
          <link
            rel="alternate"
            hrefLang="de"
            href="https://sproutsocial.com/de/"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://sproutsocial.com/"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="180x180"
            href="https://media.sproutsocial.com/uploads/180_app_icon_3.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://media.sproutsocial.com/uploads/cropped-leaf-180x180.png"
          />
          <title>FIght Cyber Bully: Social Media Management Solutions</title>
          <style
            id="wistia_429_style"
            type="text/css"
            className="wistia_injected_style"
            dangerouslySetInnerHTML={{
              __html:
                "\n        #wistia_chrome_29 ::cue {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_29 ::-webkit-media-text-track-container {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_29 ::-webkit-media-text-track-background {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_29 ::-webkit-media-text-track-display {\n            visibility: hidden;\n        }\n    ",
            }}
          />
          <style
            id="wistia_472_style"
            type="text/css"
            className="wistia_injected_style"
            dangerouslySetInnerHTML={{
              __html:
                "\n        #wistia_chrome_26 ::cue {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_26 ::-webkit-media-text-track-container {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_26 ::-webkit-media-text-track-background {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_26 ::-webkit-media-text-track-display {\n            visibility: hidden;\n        }\n    ",
            }}
          />
          <style
            id="wistia_495_style"
            type="text/css"
            className="wistia_injected_style"
            dangerouslySetInnerHTML={{
              __html:
                "\n        #wistia_chrome_23 ::cue {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_23 ::-webkit-media-text-track-container {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_23 ::-webkit-media-text-track-background {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_23 ::-webkit-media-text-track-display {\n            visibility: hidden;\n        }\n    ",
            }}
          />
          <style
            id="wistia_518_style"
            type="text/css"
            className="wistia_injected_style"
            dangerouslySetInnerHTML={{
              __html:
                "\n        #wistia_chrome_32 ::cue {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_32 ::-webkit-media-text-track-container {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_32 ::-webkit-media-text-track-background {\n            visibility: hidden;\n        }\n\n        #wistia_chrome_32 ::-webkit-media-text-track-display {\n            visibility: hidden;\n        }\n    ",
            }}
          />
        </>
      </Head>
      <div
        className="home page-template-default page page-id-16299 tailor-ui amp-dark-mode amp-mode-mouse wistia_popover_mode amp-mode-keyboard-active"
        style={{
          opacity: 1,
          visibility: "visible",
          animation: "0s ease 0s 1 normal none running none",
        }}
      >
        <header className="SH h-auto-l top0 z10 dn-p h-auto-l overflow-y-visible-l b--neutral-200 bb bb-0-l js-sprout-nav relative sticky overflow-y-scroll">
          <div className="h-100p bg--blue-1100">
            <a href="#" className="screenreader">
              Skip to main content
            </a>
            <div className="bg--neutral-0 bg--neutral-100-l z9 relative ">
              <div className="f300 flex-column flex-row-l mw900 pa350-l mx-auto flex items-center justify-between">
                <div className="px350 px0-l py350 py0-l w-100p w-auto-l flex items-center justify-between">
                  <a
                    aria-label="FIght Cyber Bully"
                    className="c--neutral-600 w-33p w-auto-l flex items-center"
                    href="#"
                    title="FIght Cyber Bully"
                  >
                    <svg
                      className="h600 flex"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 55 68"
                      height={36}
                      width={29}
                    >
                      <path
                        fill="#59cb59"
                        d="M23.4 0C10.5 0 0 10.5 0 23.4v43.1c0 1.4 1.7 2.1 2.6 1.1l12.7-12.7h16.1c12.9 0 23.4-10.5 23.4-23.4V0H23.4z"
                      ></path>
                      <path fill="#0ca750" d="M15.4 54.9H3.7l7.3 4.4z" />
                      <path fill="#2bb656" d="M54.9 0H23.4v31.5z" />
                      <path
                        fill="#0ca750"
                        d="M23.4 0C10.5 0 0 10.5 0 23.4v31.5l23.4-23.4V0z"
                      />
                      <path fill="#75dd66" d="M54.9 0L23.4 31.5h31.5z" />
                    </svg>
                    <div className="ml-2 text-lg font-semibold">
                      {" "}
                      Fight Cyber Bully{" "}
                    </div>
                  </a>
                </div>
                <div className="mobile-contact dn db-l">
                  <div className="bg--blue-1100 bg--neutral-100-l inline-flex-l flex-column flex-row-l h500-l items-center-l w-100p flex">
                    <div className="dn db-l">
                      <div className="relative-l w-100p w-auto-l bl-l         b--neutral-600-l my-auto        ">
                        <button
                          id="header-nav-login"
                          className="button-reset c--text-inverse c--text-l fw-bold ml400-l pa400 pa0-l w-100p w-auto-l inline-flex items-center justify-between"
                          title="Open Login Menu"
                          aria-controls="header-nav-login-modal"
                          aria-expanded="false"
                          aria-label="Open Login Menu"
                          onClick={
                            sessionData
                              ? () => void redirectToDemo()
                              : () => void signIn()
                          }
                        >
                          <span className="f500 f300-l ">
                            {" "}
                            {sessionData ? "Dashboard" : "Login"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <amp-state
          id="pillarCarouselState"
          className="i-amphtml-layout-container i-amphtml-element i-amphtml-built"
          i-amphtml-layout="container"
          hidden=""
          aria-hidden="true"
        ></amp-state>
        <amp-animation
          id="underlineGrow"
          layout="nodisplay"
          className="i-amphtml-layout-nodisplay i-amphtml-element i-amphtml-built"
          hidden=""
          i-amphtml-layout="nodisplay"
        ></amp-animation> */}
        <div>
          <div>
            <main
              className="Main"
              data-amp-auto-lightbox-disable=""
              id="content"
            >
              <section className="bg--blue-1100 c--text-inverse py700 section">
                <div className="flex-column flex-row-l items-center-l row">
                  <div className="col mw-41p-l mw-66p-m pb600-m px350-ns px450 w-100p mx-auto">
                    <h1 className="c--text-inverse f1100 f800-m f900-l pr-8p-offset-l">
                      A powerful solution for Cyberbullying{" "}
                    </h1>
                    <p className="f400-ns f500 mt400-ns mt450">
                      {" "}
                      Our all-in-one social media platform help to reduce
                      Cyberbullying and make the social media as safe platform
                      for all.{" "}
                    </p>
                    <div className="flex-ns items-center-ns mt500-l mt600">
                      <a
                        className="Button--large _inverse button w-100p w-auto-ns"
                        href="#"
                      >
                        {" "}
                        Start Your Free Trial{" "}
                      </a>
                      <p className="dn-ns f200-l f300 fw-semibold mt200 mt450-ns tc">
                        {" "}
                        No credit card required.
                      </p>
                      <a
                        className="c--link-white db dib dib-ns fw-bold mt0-ns mt400 px500 py400 tc w-100p w-auto-ns"
                        href="#"
                      >
                        {" "}
                        Request a demo{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="dib v-mid"
                          focusable="false"
                          height={14}
                          role="img"
                          viewBox="0 0 448 512"
                          width={16}
                        >
                          <path
                            d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </a>
                    </div>
                    <p className="db-ns dn f200-ns f300 fw-semibold mt450-ns mt500">
                      {" "}
                      No credit card required.{" "}
                    </p>
                  </div>
                  <div className="col mt500-m mw-58p-l mw-83p-m px350-l px450 w-100p relative mx-auto">
                    <img
                      alt=""
                      className="db mw-66p mw-75p-m w-100p z1 amp-wp-enforced-sizes mx-auto h-auto"
                      height={902}
                      src="./Sprout Social_ Social Media Management Solutions_files/Sprout-Leaf-Office-Quad@2x.png"
                      srcSet="https://media.sproutsocial.com/uploads/Sprout-Leaf-Office-Quad@2x-150x150.png 150w, https://media.sproutsocial.com/uploads/Sprout-Leaf-Office-Quad@2x-300x300.png 300w, https://media.sproutsocial.com/uploads/Sprout-Leaf-Office-Quad_sm@2x.png 480w, https://media.sproutsocial.com/uploads/Sprout-Leaf-Office-Quad@2x-768x771.png 959w, https://media.sproutsocial.com/uploads/Sprout-Leaf-Office-Quad@2x.png 1440w"
                      width={898}
                      decoding="async"
                    />
                    <div className="bottom400 bottom600-ns mb450-m mr350-m mw-50p pl-auto right600 ui-floater ui-floater-listening w-100p z2 absolute inline-flex justify-end">
                      <img
                        alt=""
                        className="dib mw-50p mw-none-l amp-wp-enforced-sizes w-auto"
                        height={140}
                        src="./Sprout Social_ Social Media Management Solutions_files/UI_Listening_Home-Header.svg"
                        width={178}
                        decoding="async"
                      />
                    </div>
                    <div className="left500-ns left600 left600-m ml0-l ml350 ml400-m mw-33p mw-40p-ns pr-auto top300 top400-ns ui-floater ui-floater-publishing z2 absolute inline-flex items-start">
                      <img
                        alt=""
                        className="mw-50p w-100p amp-wp-enforced-sizes h-auto"
                        height={391}
                        src="./Sprout Social_ Social Media Management Solutions_files/UI_Publishing_Home-Header@2x.png"
                        srcSet="https://media.sproutsocial.com/uploads/UI_Publishing_Home-Header@2x.png 272w, https://media.sproutsocial.com/uploads/UI_Publishing_Home-Header_small.png 128w"
                        width={272}
                        decoding="async"
                      />
                    </div>
                    <div className="flex-column mw-60p mw-60p-m mw-70p-l pl-auto right0-ns right300 top300 top500-ns ui-floater ui-floater-engagement z2 absolute inline-flex items-end">
                      <img
                        alt=""
                        className="mr450 mw-50p w-100p amp-wp-enforced-sizes h-auto"
                        height={167}
                        src="./Sprout Social_ Social Media Management Solutions_files/UI_Engagement_Home-Header-Message.png"
                        srcSet="https://media.sproutsocial.com/uploads/UI_Engagement_Home-Header-Message.png 220w, https://media.sproutsocial.com/uploads/UI_Engagement_Home-Header-Message_small.png 103w"
                        width={440}
                        decoding="async"
                      />{" "}
                      <img
                        alt=""
                        className="ml450 mw-50p w-100p amp-wp-enforced-sizes h-auto"
                        height={133}
                        src="./Sprout Social_ Social Media Management Solutions_files/UI_Engagement_Home-Header-Task-Assign.png"
                        srcSet="https://media.sproutsocial.com/uploads/UI_Engagement_Home-Header-Task-Assign.png 223w, https://media.sproutsocial.com/uploads/UI_Engagement_Home-Header-Task-Assign_small.png 104w"
                        width={446}
                        decoding="async"
                      />
                    </div>
                    <div className="bottom300 bottom400-ns left300 mw-60p mw-70p-ns pr-auto ui-floater ui-floater-reporting w-100p z2 absolute inline-flex justify-start">
                      <img
                        alt=""
                        className="dib mw-50p mw-none-l amp-wp-enforced-sizes w-auto"
                        height={119}
                        src="./Sprout Social_ Social Media Management Solutions_files/UI_Analytics_Home-Header.svg"
                        width={220}
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="pb0-m pb300 pb700-ns pb800-l pt700 section">
                <div className="flex-column  row">
                  <div className="col mw-58p-l mw-66p-m px350-ns px450 w-100p mx-auto">
                    <h2 className="f700-m f800-l f900">
                      {" "}
                      Cyberbullying: What is it ?
                    </h2>
                    <p className="f400-ns f500 mb600-m mt400-m mt450">
                      Cyberbullying is bullying with the use of digital
                      technologies. It can take place on social media, messaging
                      platforms, gaming platforms and mobile phones. It is
                      repeated behaviour, aimed at scaring, angering or shaming
                      those who are targeted.{" "}
                    </p>
                  </div>
                </div>
                <div className="dn flex-column flex-row-l row">
                  <div className="col mw-83p-m px350-ns px450 w-100p mx-auto">
                    <div
                      className="bg--green-700 br500 mt675 pa450 pt450-ns px450-ns px625-m px725-l py450 amp-wp-f89bd93"
                      data-amp-original-style="background:url(https://media.sproutsocial.com/uploads/TEI_Background_Mobile@2x.png),#fff;background-size:cover;"
                    >
                      <div className="flex-wrap-ns ma0 pa0 row flex-nowrap items-center justify-between">
                        <div
                          className="col mw-100p-l w-90p-ns w-auto-l amp-wp-bde75a3 flex flex-wrap"
                          data-amp-original-style="align-items:center;"
                        >
                          <a
                            className="hover-no-underline no-underline"
                            href="#"
                          >
                            <p className="c--neutral-0 db-l dn f600-l fw-semibold-l hover-no-underline no-underline">
                              Adopting FIght Cyber Bully delivered{" "}
                              <span className="c--teal-300">233%</span>
                              ROI. See how in the Total Economic Impact™ study.{" "}
                            </p>
                          </a>
                          <p className="c--neutral-0 db dn-l f400 f500-m fw-bold mt0">
                            {" "}
                            Adopting FIght Cyber Bully delivered{" "}
                            <span className="c--teal-300">233%</span> ROI.{" "}
                          </p>
                          <a className="mt200" href="#">
                            <p
                              className="c--neutral-0 db dn-l f300 f400-m fw-bold mt300 amp-wp-205f303 underline"
                              data-amp-original-style="line-height:23px;"
                            >
                              {" "}
                              See how in the Total Economic Impact™ study.
                              <span
                                className="dn-ns amp-wp-8de93bd"
                                data-amp-original-style="height: 21px;line-height:17px;vertical-align:middle;display:inline-block;margin-left:6px;"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="dn-ns"
                                  fill="none"
                                  height={17}
                                  viewBox="0 0 34 34"
                                  width={17}
                                >
                                  <path
                                    d="M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z"
                                    stroke="white"
                                    strokeMiterlimit={10}
                                    strokeWidth={2}
                                  ></path>
                                  <path
                                    d="M15.7119 11.4002L22.9359 10.9922L22.5279 18.2162"
                                    stroke="white"
                                    strokeWidth="1.75"
                                  />
                                  <path
                                    d="M11.1602 22.8398L23.0242 10.9758"
                                    stroke="white"
                                    strokeWidth="1.75"
                                  />
                                </svg>
                              </span>{" "}
                            </p>
                          </a>
                        </div>
                        <div
                          className="col dn flex-l flex-m w-10p-ns w-auto-l amp-wp-a526911 flex"
                          data-amp-original-style="align-items:center;justify-content:right;"
                        >
                          <a
                            className="c--text-inverse hover-no-underline no-underline"
                            href="#"
                          >
                            <img
                              alt=""
                              className="db amp-wp-enforced-sizes"
                              height={34}
                              loading="lazy"
                              src="./Sprout Social_ Social Media Management Solutions_files/ICO_Outline-arrow-diagonal.svg"
                              width={34}
                              decoding="async"
                            />{" "}
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py0 section">
                <div className="bg--blue-1100 c--text-inverse mw900 py650-l py700 relative mx-auto">
                  <div className="mw-83p-ns px350-ns px450 py300-l py650-m w-100p mx-auto">
                    <h2 className="c--text-inverse f700-m f800 f800-l ff-recoleta pr-16p-offset-l">
                      {" "}
                      Change the way you see social media.{" "}
                    </h2>
                    <p className="f500"> Exprience it Yourself.</p>
                    <div className="VideoEmbed">
                      <div
                        className="popover=true popoverAnimation=slide popoverContent=html wistia_async_5nvoimvvz0 wistia_embed wistia_embed_initialized"
                        id="5nvoimvvz0"
                      >
                        <div
                          id="wistia_101.thumb_container"
                          className="wistia_click_to_play"
                          style={{
                            position: "relative",
                            height: 42,
                            width: 1016,
                          }}
                        >
                          <div className="VideoEmbed-trigger">
                            <button className="bn flex items-center justify-start bg-transparent">
                              {/* <svg
                                              xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                              class="mr450 overflow-visible square600" height="81.727"
                                              id="svg-3mf54bn18s3g" viewBox="0 0 81.699 81.727" width="81.699">
                                              <path
                                                  d="m0 40.85c0-22.56 18.29-40.85 40.85-40.85s40.85 18.29 40.85 40.85v.027c0 22.56-18.29 40.85-40.85 40.85s-40.85-18.29-40.85-40.85v-.027l31.157-14.994v30.207l26.167-15.04-26.167-15.167z"
                                                  fill="#fdfffd" fill-rule="evenodd"></path>
                                          </svg>  */}
                              <a
                                className="bg--neutral-0 button c--neutral-900 hover-bg--neutral-100 hover-c--neutral-900 mt400-l w-100p w-auto-ns"
                                href="#"
                              >
                                {" "}
                                Apply Now{" "}
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="bottom0 c--blue-700 right0 absolute"
                    fill="currentColor"
                    height={161}
                    id="svg-4emnu4jra900"
                    viewBox="0 0 160 161"
                    width={160}
                  >
                    <path
                      d="m160 0c0 47.0532-20.179 89.4202-52.409 118.494-3.634 3.347-7.555 6.694-11.7631 9.85-8.1292 6.121-17.119 11.477-26.3001 15.972-6.9815 3.347-14.2499 6.407-21.9008 8.703-5.0687 1.434-10.0418 2.773-15.3975 3.921-5.3556 1.147-10.6156 2.008-15.9713 2.486-2.7734.287-8.12909.574-8.12909.574s-5.35565.287-8.12911.287h160"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </section>
              <section className="py700 section">
                <div className="mw900 relative mx-auto">
                  <div className="mw-66p-l mw-83p-m mx-auto-m pl-8p-offset-l px350-m px450 w-100p">
                    <h2 className="f700-m f800-l f900">
                      {" "}
                      Social solutions designed for your safety on Social Media
                    </h2>
                  </div>
                  <div className="mt500-m mt600 w-100p mx-auto flex flex-wrap">
                    <div className="flex-column flex-row-m items-center-m justify-between-m mb600-m mw-25p-l mw-33p-l mw-83p-m mx-auto-m pl-8p-offset-l px350-l px350-m px450 w-100p flex">
                      <img
                        alt="Confident social media manager looking at her phone with a calendar on the wall behind her."
                        className="db mw-100p-l mw-33p-m mw-75p mx0-ns w-100p amp-wp-enforced-sizes mx-auto h-auto"
                        height={292}
                        loading="lazy"
                        src="./Sprout Social_ Social Media Management Solutions_files/illustration-smm-object.png"
                        srcSet="https://media.sproutsocial.com/uploads/illustration-smm-object.png, https://media.sproutsocial.com/uploads/illustration-smm-object@2x.png 2x"
                        width={280}
                        decoding="async"
                      />
                      <div className="flex-column mt0-ns mt500 mw-60p-m px0-l px350-m w-100p flex">
                        <h3 className="f600-ns f700 mt600-l">
                          {" "}
                          How CyberBullying Happened
                        </h3>
                        <p className="f400-ns f500 mt400-l">
                          {" "}
                          Cyberbullies involves sending abusive or threatening
                          messages directly to the victim through private
                          messages, emails, or instant messaging platforms.
                        </p>
                      </div>
                    </div>
                    <div className="flex-column flex-row-m items-center-m justify-between-m mb600-m mt0-l mt300-m mt700 mw-25p-l mw-83p-m px350-ns px450 w-100p mx-auto flex">
                      <img
                        alt="Smiling customer care agent wearing a headset and responding to multiple messages on their laptop."
                        className="db mw-100p-l mw-33p-m mw-75p mx0-ns w-100p amp-wp-enforced-sizes mx-auto h-auto"
                        height={291}
                        loading="lazy"
                        src="./Sprout Social_ Social Media Management Solutions_files/illustration-customer-care-object.png"
                        srcSet="https://media.sproutsocial.com/uploads/illustration-customer-care-object.png, https://media.sproutsocial.com/uploads/illustration-customer-care-object@2x.png 2x"
                        width={280}
                        decoding="async"
                      />
                      <div className="flex-column mt0-ns mt500 mw-60p-m px0-l px350-m w-100p-m flex">
                        <h3 className="f600-ns f700 mt600-l">
                          {" "}
                          Effect of Cyberbullying
                        </h3>
                        <p className="f400-ns f500 mt400-l">
                          {" "}
                          Cyberbullying is a very serious issue affecting not
                          just the young victims, but also the victims'
                          families, the bully, and those who witness instances
                          of cyberbullying.
                        </p>
                        <a className="mt400-l" href="#">
                          <span className="fw-bold">
                            {" "}
                            <span className="inline-flex flex-nowrap items-baseline">
                              <i
                                aria-hidden="true"
                                className="fa-arrow-right fa-xs fas pl200"
                              />
                            </span>{" "}
                          </span>{" "}
                          <span className="_before icon" />
                        </a>
                      </div>
                    </div>
                    <div className="flex-column flex-row-m items-center-m justify-between-m mt0-l mt300-m mt700 mw-25p-l mw-33p-l mw-83p-m mx-auto-m pr-8p-offset-l px350-ns px450 w-100p flex">
                      <img
                        alt="Focused social strategist writing on his tablet with a graph in the background."
                        className="db mw-100p-l mw-33p-m mw-75p mx0-ns w-100p amp-wp-enforced-sizes mx-auto h-auto"
                        height={291}
                        loading="lazy"
                        src="./Sprout Social_ Social Media Management Solutions_files/illustration-analyst-object.png"
                        srcSet="https://media.sproutsocial.com/uploads/illustration-analyst-object.png, https://media.sproutsocial.com/uploads/illustration-analyst-object@2x.png 2x"
                        width={280}
                        decoding="async"
                      />
                      <div className="flex-column mt0-ns mt500 mw-60p-m px0-l px350-m w-100p-m flex">
                        <h3 className="f600-ns f700 mt600-l">
                          {" "}
                          How to Stop CyberBullying{" "}
                        </h3>
                        <p className="f400-ns f500 mt400-l">
                          {" "}
                          Make the most of privacy setting,investigate what
                          measures you can take to keep content private on the
                          website you use.Thike before you post.Never forget
                          that the internet is public.{" "}
                        </p>
                        <a className="mt400-l" href="#">
                          <span className="fw-bold">
                            {" "}
                            <span className="inline-flex flex-nowrap items-baseline">
                              <i
                                aria-hidden="true"
                                className="fa-arrow-right fa-xs fas pl200"
                              />
                            </span>{" "}
                          </span>{" "}
                          <span className="_before icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg--teal-700-o-20p c--text py-auto-l py700 section">
                <div className="mw900 mx-auto">
                  <div className="flex-column flex-row-l justify-between-l flex">
                    <div className="flex-column-l flex-l justify-center-l mb0-l mb600 mw-41p-l mw-83p-m mx0-l px350-ns px450 w-100p mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="alt-4lqejd5tovo0"
                        className="c--text db-ns dn w-100p w-60p-m h-auto"
                        fill="currentColor"
                        height={51}
                        id="svg-4lqejd5tovo0"
                        role="img"
                        viewBox="0 0 496 51"
                        width={496}
                      >
                        <title id="alt-4lqejd5tovo0">
                          See social differently
                        </title>
                        <g fill="currentColor">
                          <path d="m25.6631 21.0355c-1.3307-.7604-2.6614-1.3307-4.1822-1.901-1.5207-.5703-3.0415-.9505-4.5623-1.3307-1.3307-.3802-2.6613-.7603-3.992-1.3306-1.1406-.5703-2.2812-1.3307-3.04156-2.2812-.76039-1.1406-1.14058-2.4713-1.14058-3.8019 0-1.52082.57029-2.85149 1.52074-3.80198 1.1406-1.14058 2.8515-1.71087 4.3723-1.52077 1.3306 0 2.4712.38019 3.6118.95048.9505.57029 1.7109 1.33068 2.0911 2.28116.5703.95049.9505 1.90101 1.3306 2.66141.3802.9504.9505 1.7108 1.7109 2.2811s1.7109.9505 2.6614.9505c2.2811 0 3.4217-1.1406 3.4217-3.2316 0-2.09112-1.3307-4.37228-4.1821-6.27325-3.0416-1.90097-6.8435-2.85145-10.4553-2.66135-3.6119-.1901-7.22372.76038-10.26527 3.04155-2.47126 1.90097-3.801942 4.75242-3.801942 7.79395 0 1.901.380192 3.6119 1.140582 5.3227.76039 1.3307 1.71087 2.4713 3.04155 3.2317s2.66136 1.3307 4.18213 1.901c1.52075.5702 3.04155.9504 4.56235 1.3306 1.3307.3802 2.8514.7604 4.1821 1.3307 1.1406.3802 2.2812 1.3307 3.0416 2.2812.7603 1.1406 1.1405 2.4712 1.1405 3.8019 0 1.5208-.5702 2.8515-1.7108 3.8019-1.3307.9505-2.8515 1.5208-4.3723 1.5208-1.5207 0-2.8514-.3802-4.1821-.9505-1.1406-.5703-1.90096-1.3306-2.66135-2.4712-.57029-.9505-1.14058-1.901-1.71087-2.8515s-1.14058-1.7108-1.90097-2.4712c-.57029-.5703-1.52077-.9505-2.47126-1.1406-.76039 0-1.71087.1901-2.281162.7604-.570291.5703-.760388 1.5207-.760388 2.4712 0 2.2812 1.52078 4.5624 4.18213 6.4633 3.42175 2.0911 7.22367 3.2317 11.21567 3.0416 3.6119.1901 7.0336-.9505 10.0752-2.8515 2.6613-1.7109 4.1821-4.7524 3.992-7.794 0-1.7108-.3802-3.6118-1.1406-5.1326-.3802-1.5207-1.5207-2.6613-2.6613-3.4217z"></path>
                          <path d="m55.3178 31.3007c-.3802-.1901-.9505 0-1.1406.3802-.5702.9505-1.3306 1.7109-2.4712 2.0911-1.1406.5703-2.2812.9505-3.6119.9505-3.0415.1901-5.7029-1.7109-6.8434-4.5623l11.5959-5.3228c1.3306-.5702 2.2811-1.9009 2.2811-3.4217 0-2.0911-.9505-3.992-2.4712-5.1326-2.0911-1.7109-4.7525-2.4713-7.4138-2.2812-6.8435 0-12.5464 5.5128-12.7365 12.3563v.3802c-.1901 3.6119 1.1406 7.0336 3.6118 9.695 2.2812 2.4712 5.7029 3.8019 9.1247 3.8019 2.6613.1901 5.5128-.7604 7.6039-2.6614 1.7108-1.3306 2.8514-3.2316 3.2316-5.3227 0-.3802-.1901-.9505-.7604-.9505zm-15.3978-8.1741c0-1.7109.3802-3.4218 1.1406-4.9425.7603-1.1406 1.9009-1.901 3.2316-1.901s2.4713.7604 3.0416 1.901c.7603 1.1405 1.1405 2.4712 1.1405 3.8019 0 .9505-.5703 1.901-1.3306 2.2812l-6.6534 3.4217c-.3802-1.5208-.5703-3.0416-.5703-4.5623z"></path>
                          <path d="m81.1717 31.3007c-.5703-.1901-1.1406 0-1.3307.3802-.5703.9505-1.3307 1.7109-2.2812 2.0911-1.1406.5703-2.2811.9505-3.6118.9505-3.0416.1901-5.7029-1.7109-6.8435-4.5623l11.5959-5.3228c1.5208-.5702 2.2812-1.9009 2.2812-3.4217 0-2.0911-.9505-3.992-2.4713-5.1326-2.0911-1.7109-4.7524-2.4713-7.4138-2.2812-6.8435 0-12.5464 5.5128-12.5464 12.5464v.3802c-.1901 3.6118 1.1406 7.0336 3.6119 9.695 2.2811 2.4712 5.7029 3.8019 9.1246 3.8019 2.6614.1901 5.5128-.7604 7.6039-2.6614 1.7109-1.3306 2.8515-3.2316 3.2317-5.3227-.1901-.5703-.5703-1.1406-.9505-1.1406zm-15.588-8.1741c0-1.7109.3802-3.4218 1.1406-4.9425.7604-1.1406 1.901-1.901 3.2317-1.901 1.3306 0 2.4712.7604 3.0415 1.901.7604 1.1405 1.1406 2.4712 1.1406 3.8019 0 .9505-.3802 1.901-1.3307 2.4712l-6.6534 3.4218c-.3802-1.5208-.5703-3.0416-.5703-4.7524z"></path>
                          <path d="m114.248 26.9286c-.95-.5703-1.901-.9505-2.851-1.3307s-2.091-.7604-3.042-.9505c-.95-.3802-1.901-.5703-2.851-.9505-.76-.3802-1.521-.7604-2.091-1.5207-.57-.7604-.76-1.5208-.76-2.4713s.38-1.901.95-2.4713c.57-.7604 1.521-1.1405 2.471-.9505.951 0 1.901.3802 2.472 1.1406.57.7604 1.14 1.5208 1.33 2.2812.19.9505.761 1.7109 1.331 2.2812.57.7603 1.521 1.1405 2.281 1.1405s1.521-.1901 2.091-.7603c.57-.3802.951-1.1406.951-1.901-.19-1.901-1.331-3.6119-3.042-4.3722-2.281-1.3307-5.133-1.901-7.794-1.901-2.661-.1901-5.323.5703-7.6038 2.091-1.901 1.1406-3.0416 3.2317-3.0416 5.5129 0 1.7108.3802 3.2316 1.5208 4.5623.9505 1.1406 2.2812 1.901 3.6116 2.4712 1.521.3802 2.852.9505 4.372 1.3307 1.331.3802 2.472.9505 3.612 1.7109.951.7604 1.521 1.7109 1.521 3.0415 0 .9505-.38 1.901-1.14 2.4713-.761.5703-1.711.9505-2.662.9505-.95 0-2.091-.3802-2.851-1.1406-.571-.7604-1.141-1.5208-1.331-2.4712-.19-.9505-.76-1.7109-1.331-2.4713-.5699-.7604-1.5204-1.1406-2.4709-1.1406-.7604 0-1.7109.1901-2.2812.7604-.5702.5703-.9504 1.3307-.9504 2.0911.1901 1.9009 1.3306 3.6118 3.2316 4.3722 2.4709 1.3307 5.3229 1.901 7.9839 1.7109 2.852.1901 5.703-.5703 8.174-2.0911 1.901-1.1406 3.042-3.2316 3.042-5.3227 0-1.1406-.19-2.4713-.76-3.4218-.381-.9504-1.141-1.7108-2.092-2.2811z"></path>
                          <path d="m133.258 14.002c-3.612 0-7.034 1.1405-9.505 3.6118-2.662 2.2812-3.992 5.7029-3.992 9.3147 0 3.6119 1.33 7.0336 3.992 9.3148 2.851 2.6614 6.463 3.992 10.265 3.8019 3.612 0 7.034-1.3306 9.505-3.8019s3.802-5.7029 3.802-9.3148c0-3.6118-1.331-7.0335-3.992-9.3147-2.852-2.4713-6.464-3.8019-10.075-3.6118zm4.942 21.8611c-.57 1.1406-1.901 1.901-3.232 1.901-1.71 0-3.231-.9505-3.992-2.4713-1.14-1.7109-2.091-3.6118-2.661-5.5128s-.76-3.992-.95-5.893c0-5.1326 1.52-7.6039 4.752-7.6039 1.521.1901 3.042.9505 3.802 2.2812 1.141 1.7109 2.091 3.4217 2.661 5.5128.571 1.901.951 3.992.951 6.0831 0 1.901-.38 3.992-1.331 5.7029z"></path>
                          <path d="m172.988 30.5404c-.381 0-.571.1901-.761.5703-1.14 2.2811-3.612 3.8019-6.273 3.6118-2.471 0-4.943-1.1406-6.463-3.2316-1.711-2.4713-2.662-5.3228-2.472-8.3643 0-1.7109.381-3.4218 1.331-4.9425.761-1.1406 2.091-1.901 3.422-1.901.76 0 1.521.1901 2.281.7604.57.5703 1.141 1.1406 1.521 1.901.38.7603.76 1.5207 1.14 2.2811.381.7604.951 1.3307 1.521 1.901s1.331.9505 2.281.9505c.951.1901 1.901 0 2.472-.5703.57-.5703.76-1.1406.76-1.901 0-2.0911-1.331-4.1821-3.232-5.1326-2.281-1.5208-4.942-2.2812-7.604-2.0911-3.421 0-6.843 1.1406-9.314 3.6119-2.472 2.4712-3.992 5.893-3.802 9.3147 0 3.4218 1.33 6.8435 3.802 9.3148 2.471 2.6613 6.083 3.992 9.695 3.8019 2.851.1901 5.512-.7604 7.604-2.4713 1.71-1.5207 2.851-3.6118 3.041-6.083 0-.3802 0-.5703-.19-.7604-.38-.5703-.57-.5703-.76-.5703z"></path>
                          <path d="m186.675 34.5324v-19.3899c0-.3802-.19-.9505-.57-1.1406-.57-.1901-1.14-.1901-1.521 0l-6.463 3.4218c-.76.3802-1.141.7603-1.141 1.1405v.1901c0 .1901.381.7604.951 1.5208s.95 1.5208.95 2.4713v11.786c0 .9505-.38 1.7109-.95 2.2811-.57.3802-.76.9505-.951 1.7109v.1901c0 .5703.381.9505 1.141.9505h9.695c.76 0 1.141-.3802 1.141-.9505v-.1901c0-.3802-.381-.9505-1.141-1.7109-.76-.5702-1.141-1.3306-1.141-2.2811z"></path>
                          <path d="m182.873 10.7703c1.331 0 2.661-.3802 3.802-1.33067.95-.95048 1.331-2.09106 1.331-3.23164 0-1.33068-.381-2.47126-1.331-3.23165-.951-.95049-2.471-1.33068-3.802-1.33068s-2.661.38019-3.802 1.33068c-.95.76039-1.521 1.90097-1.521 3.23165 0 1.33067.571 2.47126 1.521 3.42174.951.76037 2.281 1.14057 3.802 1.14057z"></path>
                          <path d="m216.901 37.1938c-.38-.1901-.761-.5703-.951-.9505-.38-.5703-.57-1.1406-.57-1.901l-1.141-9.6949c-.19-3.0416-1.52-5.7029-3.802-7.794-2.281-1.901-5.322-3.0416-8.364-2.8515-2.471 0-4.942.3802-7.224 1.5208-1.71.7604-2.851 2.4713-2.851 4.3722 0 .7604.38 1.5208.95 2.0911.571.5703 1.521.9505 2.282.7604.76 0 1.711-.3802 2.091-1.1406.57-.7604.95-1.5208 1.14-2.2812.19-.7603.571-1.7108 1.331-2.2811.57-.7604 1.331-1.1406 2.281-1.1406 1.331 0 2.662.7604 3.232 2.0911.76 2.2811 1.33 4.5623 1.521 7.0336v.5702c-1.711-1.1405-3.612-1.7108-5.703-1.5207-2.472 0-4.943.7604-6.844 2.091-1.711 1.3307-2.661 3.6119-2.661 5.7029-.19 2.2812.95 4.5624 2.661 5.893 2.091 1.5208 4.563 2.0911 7.034 2.0911 2.661.1901 5.322-.9505 7.033-3.0415 0 .9504.571 1.7108 1.331 2.2811 1.141.3802 2.281.7604 3.422.5703 3.422 0 4.942-.5703 4.942-1.5208 0-.3802-.19-.5702-.38-.7603 0 0-.38 0-.76-.1901zm-10.266-.7604c-.57.9505-1.71 1.5207-2.851 1.5207-1.331 0-2.471-.7603-3.232-1.9009-.76-1.5208-1.33-3.0416-1.14-4.7524 0-1.1406.38-2.2812 1.14-3.2317.761-.7604 1.711-1.1406 2.662-1.1406 1.14 0 2.091.3802 2.851 1.1406.761.9505 1.331 2.2812 1.331 3.4217l.19 1.901c0 .9505-.19 2.0911-.951 3.0416z"></path>
                          <path d="m229.447 34.5324v-33.26695c0-.380196-.19-.76039-.57-1.140584-.571-.1900969-1.141-.1900969-1.521.190097l-6.653 3.231647c-.761.1901-1.141.57029-1.141.95048v.1901c0 .1901.38.76039.95 1.52078.571.57029.951 1.52077.951 2.47126v25.66307c0 .9505-.38 1.7109-.951 2.2812-.76.7604-.95 1.3307-.95 1.7108v.1901c0 .5703.38.9505 1.141.9505h9.695c.76 0 1.14-.3802 1.14-.9505v-.1901c0-.3801-.38-.9504-1.14-1.7108-.571-.3802-.951-1.1406-.951-2.0911z"></path>
                          <path d="m270.697 34.5324v-33.07685c0-1.140584-.76-1.5207773-2.091-1.140584l-6.843 2.091064c-.761.1901-1.141.57029-1.141 1.14058v.1901c0 .38019.38.76039.571.95049.38.38019.95.76038 1.33 1.14058.38.38019.761 1.14058.571 1.71087v8.36425c-1.711-1.3307-3.992-2.0911-6.084-2.0911-3.231 0-6.463 1.3307-8.744 3.6119-2.471 2.4712-3.802 5.893-3.612 9.3147-.19 3.6119 1.141 7.0336 3.612 9.5049 2.281 2.2811 5.513 3.6118 8.744 3.6118 2.662.1901 5.133-.9505 6.844-2.8514v1.1406c0 .7603.38 1.1405 1.141 1.1405h6.463c.76 0 .95-.3802.95-.9505v-.19c0-.3802-.38-.9505-.95-1.7109-.38-.1901-.761-.9505-.761-1.901zm-7.413-2.2812c0 1.5208-.381 2.8515-1.331 4.1822-.76.9505-1.901 1.5208-3.042 1.5208-1.52-.1901-2.851-.9505-3.611-2.2812-1.141-1.7109-1.901-3.4218-2.282-5.5128-.38-2.0911-.76-3.9921-.57-6.0831 0-1.901.38-3.9921 1.521-5.7029.76-1.3307 2.281-2.0911 3.802-2.0911 1.711 0 3.231.7604 4.182 2.0911 1.141 1.3307 1.711 3.0415 1.711 4.7524z"></path>
                          <path d="m281.723 10.7703c1.331 0 2.661-.3802 3.802-1.33067.951-.95048 1.331-2.09106 1.331-3.23164 0-1.33068-.38-2.47126-1.331-3.23165-.95-.95049-2.471-1.33068-3.802-1.33068s-2.661.38019-3.802 1.33068c-.95.76039-1.521 2.09106-1.521 3.23165 0 1.33067.571 2.47126 1.521 3.42174 1.141.76037 2.471 1.14057 3.802 1.14057z"></path>
                          <path d="m285.526 34.5324v-19.3899c0-.3802-.191-.9505-.571-1.1406-.57-.1901-1.14-.1901-1.521 0l-6.463 3.4218c-.76.3802-1.14.7603-1.14 1.1405v.1901c0 .1901.38.7604.95 1.5208s.951 1.5208.951 2.4713v11.786c0 .9505-.381 1.7109-.951 2.2811-.57.3802-.76.9505-.95 1.7109v.1901c0 .5703.38.9505 1.14.9505h9.695c.76 0 1.141-.3802 1.141-.9505v-.1901c0-.3802-.381-.9505-1.141-1.7109-.76-.5702-1.14-1.3306-1.14-2.2811z"></path>
                          <path d="m329.058 15.5227c0-.5703-.571-.9505-1.141-1.1406h-6.463c-.381-1.1405-.761-2.2811-.951-3.4217-.19-1.14059-.38-2.28117-.38-3.61185-.19-.95048 0-2.09106.57-2.85145.571-1.14058 2.091-1.52078 3.042-.76039.19.1901.38.1901.57.3802.38.38019.57.95048.761 1.52077.19.57029.19 1.33068.38 1.90097s.57 1.33068 1.14 1.71087c.761.57029 1.521.76038 2.472.76038 1.52 0 2.851-1.14057 2.851-2.66135 0 0 0 0 0-.19009 0-1.71088-.95-3.23165-2.281-4.37223-1.521-1.33068-3.612-1.900972-5.703-1.900972-2.852-.190097-5.513.760392-7.604 2.851452-1.711 1.90097-2.661 4.56233-2.661 7.22369v3.4217h-12.737c-.38-1.1405-.76-2.2811-.95-3.4217-.19-1.14059-.38-2.28117-.38-3.61185 0-.95048.19-2.09106.57-2.85145.57-1.14058 2.091-1.52078 3.041-.76039.19.1901.381.1901.571.3802.38.57029.57 1.14058.76 1.71087s.19 1.33068.38 1.90097.571 1.33068 1.141 1.71087c.76.57028 1.521.76038 2.471.76038 1.521.1901 2.852-.95048 3.042-2.47125v-.1901c0-1.71087-.951-3.23165-2.282-4.37223-1.52-1.33068-3.611-1.90097-5.702-1.90097-2.852-.19009-5.513.76039-7.604 2.85146-1.711 1.90096-2.662 4.56232-2.472 7.22369v3.2316h-3.802c-.38 0-.57.1901-.76.3802s-.38.3802-.38.7604v.9505c0 .5703.38.9505 1.14.9505h3.802v16.7285c0 .9505-.38 1.7109-1.14 2.2812-.761.7604-.951 1.3307-.951 1.7109v.19c0 .5703.381.9505 1.141.9505h10.265c.57 0 .951-.3802.951-.9505v-.19c0-.3802-.381-.7604-.571-1.1406-.38-.3802-.95-.7604-1.33-1.3307-.381-.3802-.571-1.1406-.571-1.7109v-16.5384h12.547v16.7285c0 .9505-.38 1.7109-1.141 2.2812-.76.7604-.95 1.3307-.95 1.7109v.19c0 .5703.38.9505 1.14.9505h10.266c.57 0 .95-.3802.95-.9505v-.19c0-.3802-.38-.7604-.57-1.1406-.38-.3802-.951-.7604-1.331-1.3307-.38-.3802-.57-1.1406-.57-1.7109v-16.5384h6.083c.19 0 .57-.1901.76-.3802s.38-.3802.38-.7604z"></path>
                          <path d="m351.679 31.3007c-.57-.1901-.95 0-1.14.3802-.571.9505-1.331 1.7109-2.472 2.0911-1.14.5703-2.281.9505-3.612.9505-3.041.1901-5.702-1.7109-6.843-4.5623l11.596-5.3228c1.331-.5702 2.281-1.9009 2.281-3.4217 0-2.0911-.95-3.992-2.471-5.1326-2.091-1.7109-4.753-2.4713-7.414-2.2812-6.843 0-12.546 5.5128-12.736 12.3563v.5703c-.191 3.6118 1.14 7.0336 3.611 9.695 2.282 2.4712 5.703 3.8019 9.125 3.8019 2.661.1901 5.513-.7604 7.604-2.6614 1.711-1.3306 2.851-3.2316 3.232-5.3227 0-.5703-.381-1.1406-.761-1.1406zm-15.398-8.1741c0-1.7109.38-3.4218 1.141-4.9425.57-1.1406 1.901-1.901 3.232-1.901 1.33 0 2.471.7604 3.041 1.901.76 1.1405 1.141 2.4712 1.141 3.8019 0 .9505-.381 1.901-1.331 2.4712l-6.653 3.4218c-.381-1.5208-.571-3.0416-.571-4.7524z"></path>
                          <path d="m370.879 14.0019c-3.232-.1901-6.273 1.901-7.034 5.1326v-3.992c0-1.1406-.57-1.5208-1.71-.9505l-6.274 2.8515c-.76.3802-1.14.7604-1.14 1.3306v.1901c0 .3802.38.9505 1.14 1.5208.761.5703 1.141 1.3307 1.141 2.2812v12.1662c0 .9505-.38 1.7109-.951 2.2811-.76.7604-.95 1.3307-.95 1.7109v.1901c0 .5703.38.9505 1.14.9505h9.695c.761 0 1.141-.3802 1.141-.9505v-.1901c0-.3802-.38-.7604-.57-1.1406-.38-.3802-.951-.7603-1.331-1.1405s-.57-.9505-.57-1.7109v-10.4553c0-1.3307.19-2.8515.76-3.9921.19-.9505 1.141-1.7109 2.091-1.7109.57 0 1.141.1901 1.331.7604.38.3802.57.9505.57 1.5208.19.5703.38 1.1406.951 1.5208.57.5703 1.33.7604 2.091.7604 2.281 0 3.421-1.3307 3.421-4.1822 0-1.3306-.38-2.4712-1.33-3.4217-.951-.9505-2.281-1.5208-3.612-1.3307z"></path>
                          <path d="m399.583 31.3007c-.19 0-.19 0 0 0-.57-.1901-1.14 0-1.331.3802-.57.9505-1.33 1.7109-2.281 2.0911-1.14.5703-2.281.9505-3.612.9505-3.041.1901-5.893-1.7109-7.033-4.5623l11.596-5.3228c1.33-.5702 2.281-1.9009 2.281-3.4217 0-2.0911-.951-3.992-2.471-5.1326-2.091-1.7109-4.753-2.4713-7.414-2.2812-6.844 0-12.547 5.5128-12.737 12.3563v.3802c-.19 3.6119 1.141 7.0336 3.612 9.695 2.281 2.4712 5.703 3.8019 9.125 3.8019 2.661.1901 5.513-.7604 7.604-2.6614 1.711-1.3306 2.851-3.2316 3.231-5.3227 0-.3802-.19-.7604-.57-.9505zm-15.588-8.1741c0-1.7109.38-3.4218 1.331-4.9425.76-1.1406 1.901-1.901 3.232-1.901 1.33 0 2.471.7604 3.041 1.901.76 1.1405 1.141 2.4712 1.141 3.8019 0 .9505-.381 1.901-1.331 2.4712l-6.653 3.4218c-.571-1.5208-.761-3.0416-.761-4.7524z"></path>
                          <path d="m429.809 34.5324-.571-9.3147c0-3.0416-1.14-6.0831-3.231-8.5544-1.901-1.7109-4.372-2.6613-6.844-2.6613-3.231-.1901-6.273 1.3306-7.794 4.1821v-2.8515c0-.3802-.19-.9504-.38-1.1405-.38-.1901-.76-.1901-1.331 0l-6.273 3.0415c-.76.3802-1.14.7604-1.14 1.1406v.1901c0 .3802.19.5703.38.7604s.57.5703.95.7604.761.5703.951.9504c.19.3802.38.9505.38 1.5208v12.1662c0 .9505-.38 1.7109-1.141 2.2812-.76.7604-1.14 1.3307-1.14 1.5208v.1901c0 .5702.38.9504 1.14.9504h9.695c.761 0 1.141-.3802 1.141-.9504v-.1901c0-.3802-.38-.9505-1.141-1.5208-.76-.5703-1.14-1.5208-1.14-2.2812v-11.786c0-1.5208.38-2.8514 1.14-4.1821.761-.9505 2.091-1.5208 3.422-1.5208 2.852 0 4.372 2.6614 4.562 7.9841l.571 9.6949c0 .9505-.38 1.7109-.951 2.4713-.38.3802-.76.9505-.95 1.5208v.1901c0 .5702.38.9504 1.14.9504h9.125c.76 0 1.141-.3802 1.141-.9504v-.1901c-.191-.5703-.381-1.1406-.951-1.7109-.38-.9505-.76-1.7109-.76-2.6614z"></path>
                          <path d="m451.481 31.6809c-.38 0-.95.1901-1.141.5703-.57 1.5208-1.9 2.4713-3.611 2.2812-.761 0-1.331-.3802-1.901-.9505-.571-.7604-.761-1.5208-.761-2.4713v-13.4968h6.083c.19 0 .571-.1901.761-.3802s.38-.3802.38-.7604v-.9505c0-.3802-.19-.5703-.38-.7604s-.38-.3802-.761-.3802h-6.083v-5.13261c0-.76039-.38-1.33068-1.14-1.33068h-1.141c-.57 0-.95.38019-1.14 1.33068-.191 1.33071-.951 2.66131-1.901 3.80191-.951.9505-2.282 1.5208-3.612 1.3307h-1.331c-.76 0-.95.3802-.95 1.1406v.9505c0 .5703.19.9505.76 1.1406h.19 2.471v13.4968c-.19 2.4713.571 4.7525 1.901 6.6534 1.521 1.5208 3.612 2.4713 5.703 2.2812 2.281.1901 4.372-.7604 5.893-2.2812 1.331-1.5208 2.091-3.4217 2.091-5.3227.38-.3802 0-.7604-.38-.7604z"></path>
                          <path d="m463.646 34.5324v-33.267c0-.380195-.19-.760389-.57-1.140583-.38 0-.951 0-1.521.190097l-6.653 3.231646c-.761.1901-1.141.57029-1.141.95049v.19009c0 .3802.38.76039.951 1.52078.57.57029.95 1.52077.95 2.47126v25.66312c0 .9504-.38 1.7108-.95 2.2811-.761.7604-.951 1.3307-.951 1.7109v.1901c0 .5703.38.9505 1.141.9505h9.695c.76 0 1.14-.3802 1.14-.9505v-.1901c0-.3802-.38-.9505-1.14-1.7109-.38-.3802-.761-1.1406-.951-2.091z"></path>
                          <path d="m495.012 14.3821h-6.273c-.76 0-1.14.3802-1.14.9505v.1901c0 .3802.38.7604.95 1.1406s.951.7603 1.331 1.3306c.38.3802.38 1.3307 0 2.4713l-5.703 13.4969-6.083-14.2573c-.19-.5703-.38-1.3307-.38-1.901.19-.3802.38-.7603.57-1.1405s.38-.7604.38-1.1406v-.1901c0-.5703-.38-.9505-.95-.9505h-9.695c-.761 0-1.141.1901-1.141.7604v.1901c.19.7604.57 1.3307 1.141 1.9009.76.5703 1.33 1.5208 1.711 2.2812l10.455 21.2909c-1.901 4.9425-3.802 7.4137-5.323 7.4137-.57 0-1.14-.3802-1.521-.9504-.38-.7604-.57-1.3307-.76-2.0911s-.57-1.5208-1.141-2.0911c-.57-.5703-1.33-.9505-2.281-.9505-.95 0-1.711.1901-2.281.9505-.57.5703-.76 1.3307-.76 2.2812 0 1.5208.95 2.8514 2.091 3.8019 1.52 1.1406 3.612 1.7109 5.513 1.7109.95 0 2.091-.1901 2.851-.7604.95-.3802 1.711-.9505 2.281-1.5208.761-.7603 1.331-1.5207 1.901-2.4712.57-.7604.951-1.7109 1.521-2.4713.38-.5703.76-1.5208 1.14-2.4712l9.886-21.481c.38-.7604.95-1.5208 1.52-2.2812.571-.5702.951-1.1405 1.141-1.9009v-.1901c.19-.5703-.38-.9505-.951-.9505z"></path>
                        </g>
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="alt-5siggns6f1g0"
                        className="c--neutral-0 db dn-ns mw-60p-l mw-70p-m mw-75p w-100p h-auto"
                        fill="currentColor"
                        height={103}
                        id="svg-5siggns6f1g0"
                        role="img"
                        viewBox="0 0 240 103"
                        width={240}
                      >
                        <title id="alt-5siggns6f1g0">
                          See social differently
                        </title>
                        <g fill="currentColor">
                          <path d="m24.4889 19.9416c-1.2798-.6399-2.5596-1.2798-3.9993-1.7597-1.4398-.4799-2.8795-.9598-4.3193-1.2798-1.2797-.3199-2.7195-.7998-3.9993-1.2797-.9598-.48-1.9196-1.2798-2.71948-2.2396-.79986-1.1199-1.1198-2.3996-1.1198-3.6794 0-1.43975.47991-2.71952 1.43975-3.67935 1.11983-.95983 2.71953-1.59972 4.15923-1.43975 1.2798 0 2.3996.31994 3.5194.95983.7999.63989 1.5997 1.27978 2.0796 2.23961.48.79986.9599 1.75969 1.2798 2.55956.32.7998.9599 1.5997 1.5997 2.2396.6399.6399 1.4398.9598 2.3996.9598 2.0797 0 3.1995-.9598 3.1995-3.0394 0-2.07968-1.2798-4.15931-3.9993-5.919-3.0395-1.91966-6.3989-2.87949-9.9183-2.71952-3.3594-.31994-6.87878.63989-9.5983 2.71952-2.39958 1.75969-3.679357 4.63918-3.679357 7.5187 0 1.7597.319947 3.5194 1.119807 4.9591.63988 1.2798 1.59971 2.3996 2.87949 3.1994 1.27977.7999 2.55955 1.2798 3.9993 1.7597 1.43976.4799 2.87946.7999 4.31926 1.2798 1.2797.32 2.7195.7999 3.8393 1.2798s2.0796 1.1198 2.8795 2.0796 1.1198 2.2396 1.1198 3.5194c0 1.4397-.4799 2.7195-1.5997 3.6794-1.1198.9598-2.7195 1.4397-4.1593 1.4397-1.4397 0-2.7195-.3199-3.9993-.9598-.9598-.48-1.91965-1.2798-2.55954-2.2396-.63988-.7999-1.1198-1.7597-1.59972-2.7196-.47991-.7998-.95983-1.5997-1.75969-2.2396-.63988-.6399-1.43974-.9598-2.2396-.9598s-1.75969.16-2.239607.7999c-.479916.6398-.7998594 1.4397-.7998594 2.2396 0 2.2396 1.2797764 4.3192 4.1592664 6.2389 3.19944 2.0796 6.87875 3.0394 10.71815 2.8795 3.3594.1599 6.7188-.7999 9.5983-2.7196 2.5595-1.5997 3.9993-4.4792 3.8393-7.5186 0-1.7597-.3199-3.3594-1.1198-4.9592-.4799-1.2797-1.4398-2.3995-2.7195-3.1994z"></path>
                          <path d="m43.3658 38.3383c2.5595.16 5.1191-.7998 7.1987-2.5595 1.5997-1.2798 2.7195-3.0395 3.0395-5.1191.16-.4799-.16-.7999-.6399-.9598-.4799-.16-.7999 0-1.1198.3199-.4799.9598-1.2798 1.5997-2.2396 2.0796-1.1198.6399-2.2396.9599-3.5194.9599-2.8795.1599-5.599-1.5997-6.5588-4.3193l11.038-5.1191c1.4398-.4799 2.2396-1.9196 2.2396-3.3594 0-1.9196-.9598-3.6793-2.3995-4.9591-2.0797-1.5997-4.4793-2.2396-7.0388-2.0796-.16 0-.3199 0-.3199 0-6.5589.1599-11.838 5.599-11.678 12.3178-.16 3.3594 1.1198 6.7188 3.3594 9.2784 2.2396 2.2396 5.4391 3.5193 8.6385 3.5193zm-3.9993-21.1162c.6399-1.1198 1.7597-1.9197 3.0395-1.9197 1.2797 0 2.3995.6399 2.8795 1.7597.6398 1.1198 1.1198 2.2396 1.1198 3.5194.1599.9598-.48 2.0796-1.2798 2.3995l-6.3989 3.1995c-.3199-1.4398-.4799-2.8795-.4799-4.3193 0-1.4397.3199-3.1994 1.1198-4.6391z"></path>
                          <path d="m68.0015 38.3384c2.5596.1599 5.2791-.7999 7.1988-2.5596 1.5997-1.2798 2.7195-3.0395 3.0394-5.1191 0-.4799-.1599-.7998-.6399-.9598-.4799-.16-.7998 0-1.1197.3199-.48.9599-1.2798 1.5997-2.2397 2.0797-1.1198.6398-2.2396.7998-3.3594.7998-2.8795.16-5.599-1.5997-6.5588-4.3192l11.038-5.1191c1.4398-.4799 2.2396-1.7597 2.2396-3.3594 0-1.9197-.9598-3.8394-2.3995-4.9592-1.9197-1.5997-4.4792-2.2396-7.0388-2.0796-.16 0-.3199 0-.4799 0-6.5588.16-11.8379 5.759-11.678 12.3178-.1599 3.3594 1.1199 6.7189 3.3595 9.2784 2.2396 2.3996 5.279 3.6794 8.6384 3.6794zm-3.9993-21.1163c.6399-1.1198 1.7597-1.9197 3.0395-1.9197s2.3996.6399 2.8795 1.7597c.6399 1.1198 1.1198 2.2396 1.1198 3.5194.16.9598-.4799 2.0796-1.2798 2.3996l-6.3988 3.1994c-.32-1.4397-.48-2.8795-.48-4.3192-.1599-1.4398.32-3.1995 1.1198-4.6392z"></path>
                          <path d="m101.436 36.2587c-.96 0-1.9197-.3199-2.7196-.9598-.6399-.6399-1.1198-1.4397-1.4397-2.2396-.32-.7999-.6399-1.5997-1.2798-2.2396s-1.4398-1.1198-2.3996-.9598c-.7998 0-1.5997.1599-2.2396.6398-.6399.48-.9598 1.2798-.7998 2.0797.1599 1.7597 1.2797 3.3594 3.0394 4.1592 2.3996 1.2798 4.9591 1.7597 7.6787 1.7597 2.719.16 5.439-.6399 7.679-2.0796 1.759-1.1198 2.879-3.0395 2.879-5.1191 0-1.1198-.16-2.2396-.8-3.3594-.48-.7999-1.12-1.5997-1.919-2.0796-.8-.48-1.76-.9599-2.72-1.2798-.96-.32-1.92-.6399-2.879-.9598-.96-.32-1.76-.6399-2.72-.9599-.7998-.3199-1.4397-.7998-1.9196-1.4397s-.7999-1.5997-.6399-2.3996c0-.9598.3199-1.7597.9598-2.3996s1.4397-.9598 2.3997-.9598 1.76.3199 2.399.9598c.64.6399.96 1.4398 1.28 2.2396.32.7999.64 1.5997 1.28 2.2396.48.6399 1.44 1.1198 2.24.9599.8 0 1.439-.32 2.079-.7999.48-.4799.8-1.1198.8-1.9197-.16-1.7597-1.28-3.3594-2.879-4.1592-2.24-1.2798-4.8-1.9197-7.359-1.7597-2.5596-.16-5.1192.6399-7.3588 2.0796-1.7597 1.1198-2.8795 3.1995-2.8795 5.2791 0 1.5997.48 3.1994 1.4398 4.3192s2.0796 1.9197 3.5194 2.3996c1.4397.4799 2.7195.7999 4.1591 1.1198 1.28.3199 2.4.7999 3.52 1.5997.959.6399 1.439 1.7597 1.439 2.8795 0 .9599-.32 1.7597-.96 2.3996-1.119.6399-1.919.9598-2.879.9598z"></path>
                          <path d="m128.311 38.3384c3.359.1599 6.718-1.2798 9.118-3.6794s3.679-5.599 3.519-8.9584c0-3.3594-1.279-6.7188-3.839-8.9584-2.559-2.3996-6.079-3.6794-9.598-3.6794-3.36 0-6.719 1.1198-9.119 3.5194-2.559 2.2396-3.839 5.439-3.839 8.7984-.16 3.5194 1.28 6.7189 3.839 9.1184 2.72 2.5596 6.239 3.8394 9.919 3.8394zm-1.76-23.036c1.44.16 2.879.9598 3.679 2.2396 1.12 1.5997 1.92 3.3594 2.4 5.2791s.8 3.8393.8 5.759c.16 1.9196-.32 3.8393-1.12 5.439-.64 1.1198-1.92 1.9197-3.199 1.9197-1.6 0-3.04-.9599-3.84-2.2396-1.12-1.5997-2.079-3.3594-2.559-5.2791s-.8-3.8393-.8-5.759c0-4.7991 1.599-7.3587 4.639-7.3587z"></path>
                          <path d="m156.305 38.3384c2.56.1599 5.28-.7999 7.199-2.3996 1.76-1.4398 2.72-3.5194 2.88-5.759 0-.32 0-.6399-.32-.7999-.16-.1599-.48-.3199-.8-.1599-.32 0-.64.1599-.8.4799-1.12 2.2396-3.519 3.5194-6.079 3.5194-2.399 0-4.799-1.1198-6.239-3.0395-1.6-2.3996-2.559-5.1191-2.399-7.9986 0-1.7597.32-3.3594 1.279-4.7992.64-1.1198 1.92-1.9196 3.36-1.9196.8 0 1.44.3199 2.079.7998.64.48 1.12 1.1198 1.44 1.7597s.8 1.4398 1.12 2.0797.96 1.2797 1.44 1.7597c.64.4799 1.28.7998 2.079.7998.8.16 1.76-.16 2.4-.6399.48-.4799.8-1.1198.8-1.7597 0-2.0796-1.28-3.9993-3.04-4.9591-2.239-1.4397-4.799-2.0796-7.358-1.9197-3.36 0-6.559 1.1198-8.959 3.5194-2.399 2.3996-3.839 5.599-3.679 8.9585 0 3.3594 1.28 6.5588 3.679 8.7984 3.04 2.3996 6.399 3.6794 9.918 3.6794z"></path>
                          <path d="m180.781 36.8986v-.16c0-.3199-.32-.9598-.959-1.5997-.64-.6399-.96-1.4397-1.12-2.2396v-18.5567c0-.4799-.16-.7999-.48-1.1198-.48-.16-1.12-.16-1.44 0l-6.239 3.0394c-.64.32-1.12.7999-1.12 1.1198v.16c0 .32.32.7999.96 1.4398s.96 1.4397.96 2.3995v11.358c0 .7999-.32 1.5998-.96 2.2396-.48.48-.8.9599-.96 1.5998v.1599c0 .6399.32.7999 1.12.7999h9.279c.639.16.959 0 .959-.6399z"></path>
                          <path d="m175.023 10.1833c1.28 0 2.56-.31994 3.519-1.27977.8-.79986 1.44-1.91966 1.28-3.19943 0-1.27978-.48-2.39958-1.28-3.19944-.959-.79986-2.239-1.27978-3.519-1.27978s-2.559.31995-3.519 1.27978c-.96.79986-1.44 1.91966-1.44 3.19944 0 1.27977.48 2.39957 1.44 3.19943s2.239 1.27977 3.519 1.27977z"></path>
                          <path d="m200.778 37.3785c.96.4799 2.08.6399 3.2.6399 3.199 0 4.799-.4799 4.799-1.4397 0-.32-.16-.48-.32-.6399-.32-.16-.48-.32-.8-.4799-.32-.16-.64-.48-.8-.7999-.32-.6399-.48-1.2798-.64-1.9197l-.96-9.2783c-.16-2.8795-1.599-5.5991-3.679-7.5187-2.24-1.9197-5.119-2.8795-7.999-2.7195-2.399 0-4.799.4799-6.878 1.5997-1.6.7998-2.72 2.3996-2.72 4.1593 0 .7998.32 1.4397.8 2.0796.64.4799 1.44.7998 2.24.7998.799 0 1.599-.3199 2.079-.9598s.96-1.4397 1.12-2.2396c.32-.7999.64-1.5997 1.12-2.2396s1.28-.9598 2.239-.9598c1.28 0 2.56.7998 3.04 1.9196.8 2.0797 1.28 4.4792 1.44 6.7189v.6398c-1.6-1.1198-3.52-1.5997-5.439-1.4397-2.4-.16-4.64.6399-6.559 1.9197-1.76 1.2797-2.72 3.3594-2.56 5.599-.16 2.2396.8 4.3192 2.56 5.599 1.919 1.4397 4.319 2.0796 6.719 1.9196 3.199 0 5.439-.9598 6.718-2.8794.16.6398.64 1.4397 1.28 1.9196zm-3.039-2.7195c-.64.7999-1.6 1.4397-2.56 1.4397-1.28 0-2.559-.7998-3.039-1.9196-.8-1.4398-1.28-3.0395-1.12-4.6392 0-1.1198.32-2.2396.96-3.0395.64-.7998 1.599-1.1198 2.559-1.1198s1.92.32 2.72 1.1198c.8.9599 1.279 2.0797 1.279 3.3594l.16 1.7597c0 .9599-.319 2.0797-.959 3.0395z"></path>
                          <path d="m211.336 37.6985h9.278c.8 0 1.12-.32 1.12-.7999v-.16c0-.3199-.32-.9598-1.12-1.5997-.639-.4799-.959-1.2798-1.119-2.2396v-31.83439c0-.479916-.16-.79986-.48-.959832-.48-.1599717-1.12-.1599717-1.6.159972l-6.239 3.03947c-.64.31994-.96.63988-.96.95983v.15997c0 .31994.32.79986.96 1.43975.64.63988.96 1.43974.96 2.39957v24.63566c0 .7999-.32 1.5997-.96 2.2396-.64.7999-.96 1.2798-.96 1.5997v.16c0 .4799.32.7999 1.12.7999z"></path>
                          <path d="m24.809 86.9698v-31.6744c0-1.1198-.6399-1.4398-1.9196-.9599l-6.5589 1.9197c-.6399.16-1.1198.6399-1.1198 1.1198v.16c0 .4799.32.7998.6399.9598.4799.3199.7999.6399 1.2798 1.1198s.6399.9598.6399 1.5997v7.9986c-1.5998-1.2798-3.6794-2.0796-5.919-1.9197-3.19943 0-6.2389 1.2798-8.31853 3.5194-2.39958 2.3996-3.5193836 5.599-3.5193836 8.9585-.1599714 3.3594 1.1198036 6.7188 3.5193836 9.1183 2.2396 2.2397 5.1191 3.3595 8.31853 3.3595 2.3996.1599 4.7992-.7999 6.5588-2.7196l.16 1.1198c0 .7999.32 1.1198 1.1198 1.1198h6.2389c.6399 0 .9599-.3199.9599-.7998v-.16c0-.3199-.32-.7998-.9599-1.5997-.7998-.6399-1.1198-1.4398-1.1198-2.2396zm-7.0387-2.2396c.1599 1.4397-.32 2.8795-1.2798 3.9993-.7999.9598-1.7597 1.4397-3.0395 1.4397-1.4397-.1599-2.7195-.9598-3.51936-2.2396-.95983-1.5997-1.75969-3.3594-2.07963-5.1191-.47992-1.9196-.63989-3.8393-.63989-5.9189-.15997-1.9197.47992-3.8394 1.43975-5.4391.79986-1.2798 2.23963-1.9196 3.67933-1.9196 1.5997 0 2.8795.7998 3.8393 2.0796 1.1198 1.2798 1.5998 2.8795 1.5998 4.4792z"></path>
                          <path d="m38.8863 86.9698v-18.3968c0-.4799-.16-.7998-.4799-1.1198-.48-.3199-.9599-.3199-1.4398 0l-6.2389 3.0395c-.6399.3199-1.1198.7998-1.1198 1.1198v.16c0 .3199.32.7998.9598 1.4397.6399.6399.9599 1.4397.9599 2.3996v11.198c0 .7999-.32 1.5997-.9599 2.2396-.6398.7999-.9598 1.2798-.9598 1.5997v.16c0 .4799.32.7999 1.1198.7999h9.2784c.7998 0 1.1198-.32 1.1198-.7999v-.16c0-.3199-.32-.9598-1.1198-1.5997-.6399-.4799-.9599-1.2798-1.1198-2.0796z"></path>
                          <path d="m35.2072 64.2538c1.2797 0 2.5595-.3199 3.5194-1.2798.7998-.7998 1.2797-1.9196 1.2797-3.0394 0-1.2798-.4799-2.3996-1.2797-3.1995-.9599-.7998-2.2397-1.2797-3.5194-1.2797-1.2798 0-2.5596.3199-3.5194 1.1198-.9598.7998-1.4398 1.9196-1.4398 3.1994s.48 2.3996 1.4398 3.1994c.9598.9599 2.2396 1.2798 3.5194 1.2798z"></path>
                          <path d="m80.6392 68.733c0-.3199-.16-.4799-.3199-.6399-.16-.16-.4799-.3199-.6399-.3199h-6.2389c-.32-1.1198-.6399-2.2396-.7999-3.3594-.1599-1.1198-.3199-2.2396-.3199-3.3594-.16-.9599.1599-1.9197.4799-2.7196.3199-.6399 1.1198-1.1198 1.9197-1.1198.6398 0 1.1198.16 1.5997.6399.3199.4799.6399.9598.6399 1.5997.1599.6399.3199 1.2798.4799 1.9197s.4799 1.2798 1.1198 1.5997c.6399.4799 1.5997.6399 2.3996.6399.7998 0 1.5997-.3199 2.0796-.7999.4799-.4799.6399-1.1198.6399-1.7596 0-1.5998-.7999-3.1995-2.2396-4.1593-1.5997-1.1198-3.3594-1.7597-5.2791-1.7597-2.7195-.16-5.2791.7998-7.1987 2.5595-1.5997 1.9197-2.5596 4.3193-2.3996 6.8788v3.1995h-12.3178c-.32-1.1198-.6399-2.2396-.7999-3.3594s-.3199-2.2396-.3199-3.3594c-.16-.9599.1599-1.9197.4799-2.7196.1599-.1599.1599-.3199.3199-.4799.7999-.7998 2.2396-.7998 3.0395 0 .3199.4799.6399.9598.6399 1.5997.1599.6399.3199 1.2798.4799 1.9197s.4799 1.2798 1.1198 1.5997c.6399.4799 1.4397.6399 2.3996.6399h.1599c1.4398 0 2.5596-1.1198 2.5596-2.5595 0-1.5998-.7999-3.1995-2.2396-4.1593-1.5997-1.1198-3.3594-1.7597-5.2791-1.7597-2.5595-.16-5.2791.7999-7.0387 2.7195-1.5998 1.9197-2.5596 4.3193-2.5596 6.8788v3.1994h-3.5194c-.3199 0-.4799.16-.7998.32-.16.16-.32.4799-.32.6399v.9598c0 .6399.32.9598 1.1198.9598h3.5194v16.3172c0 .7998-.3199 1.5997-.9598 2.2396-.6399.7998-.9599 1.2797-.9599 1.5997v.16c0 .4799.32.7998.9599.7998h9.7582c.6399 0 .9599-.3199.9599-.7998v-.32c0-.4799-.32-.7998-.6399-.9598-.4799-.32-.9598-.7999-1.2798-1.1198-.4799-.4799-.6399-.9599-.6399-1.5997v-16.4771h8.3186.1599 3.5194v16.3171c0 .7999-.3199 1.5997-.9598 2.2396-.6399.7999-.9598 1.2798-.9598 1.5997v.16c0 .4799.3199.7998.9598.7998h9.7583c.6399 0 .9598-.3199.9598-.7998v-.32c0-.4799-.3199-.7998-.6399-.9598-.4799-.3199-.7998-.7998-1.2798-1.1198-.4799-.4799-.6398-.9598-.6398-1.5997v-16.3171h5.9189c.32 0 .4799-.16.6399-.32s.3199-.4799.3199-.6399v-.9598z"></path>
                          <path d="m102.235 83.7703c-.48-.1599-.8 0-1.12.32-.64.7998-1.2795 1.5997-2.2393 2.0796-1.1198.6399-2.2396.7999-3.3594.7999-2.8795.16-5.599-1.5997-6.5589-4.3193l11.0381-5.1191c1.4395-.4799 2.2395-1.9196 2.2395-3.3594 0-1.9196-.96-3.8393-2.3995-4.9591-1.9196-1.5997-4.4792-2.3996-7.0387-2.0796-.16 0-.32 0-.48 0-6.5588.1599-11.8379 5.759-11.6779 12.3178-.16 3.3594 1.1198 6.7188 3.3594 9.2784 2.2396 2.3996 5.4391 3.6793 8.6385 3.5194 2.5595.1599 5.1191-.7999 7.1987-2.3996 1.5995-1.2798 2.7195-3.0395 3.0395-5.1191 0-.4799-.32-.7999-.64-.9599zm-14.8773-7.6786c0-1.5997.32-3.3594 1.1198-4.7992.6399-1.1198 1.9197-1.9196 3.1995-1.9196 1.1198.16 2.2396.7998 2.7195 1.9196.6399 1.1198 1.1198 2.2396 1.1198 3.5194.16.9599-.4799 1.9197-1.2798 2.3996l-6.3989 3.1994c-.3199-1.4397-.4799-2.8795-.4799-4.3192z"></path>
                          <path d="m120.632 67.2932c-3.199-.1599-6.079 1.9197-6.878 4.9592v-3.6794c0-1.1198-.48-1.4397-1.6-.9598l-6.079 2.7195c-.64.32-1.12.7999-1.12 1.1198v.16c0 .3199.32.7998 1.12 1.4397.64.4799 1.12 1.2798 1.12 2.0797v11.6779c0 .7999-.32 1.5997-.96 2.2396-.64.7999-.96 1.2798-.96 1.5997v.16c0 .4799.32.7999 1.12.7999h9.278c.8 0 1.12-.32 1.12-.7999v-.3199c0-.48-.32-.7999-.64-.9599-.48-.3199-.8-.7998-1.28-1.1198-.48-.4799-.64-.9598-.64-1.5997v-10.0782c0-1.2798.16-2.7195.64-3.8393.32-.9599 1.12-1.5998 2.08-1.5998.48 0 1.12.16 1.28.6399.32.4799.48.9599.64 1.4398.16.6399.48 1.1198.799 1.4397.64.4799 1.28.6399 2.08.6399 2.08 0 3.2-1.2798 3.2-3.9993 0-1.1198-.48-2.3996-1.28-3.1994-.64-.6399-1.76-1.1198-3.04-.9599z"></path>
                          <path d="m147.827 83.7703c-.48-.1599-.959 0-1.119.32-.64.7998-1.28 1.5997-2.24 2.0796-1.12.4799-2.24.7999-3.359.7999-2.88.16-5.599-1.5997-6.559-4.3193l11.198-5.1191c1.28-.4799 2.239-1.9196 2.239-3.3594 0-1.9196-.959-3.6793-2.399-4.9591-1.92-1.5997-4.479-2.3996-7.039-2.0796-.16 0-.32 0-.32 0-6.719.1599-11.838 5.599-11.678 12.3178-.16 3.3594.96 6.7188 3.36 9.2784 2.239 2.3996 5.439 3.6793 8.638 3.5194 2.56.1599 5.119-.7999 7.199-2.3996 1.599-1.2798 2.719-3.0395 3.039-5.1191-.32-.4799-.48-.7999-.96-.9599zm-14.717-7.6786c0-1.5997.32-3.3594 1.12-4.7992.64-1.1198 1.919-1.9196 3.199-1.9196 1.12.16 2.24.7998 2.72 1.9196.64 1.1198 1.12 2.2396 1.12 3.5194.16.9599-.48 1.9197-1.28 2.3996l-6.399 3.1994c-.32-1.4397-.48-2.8795-.48-4.3192z"></path>
                          <path d="m176.943 86.9698-.64-8.9584c0-3.0395-1.12-5.919-3.04-8.1586-1.759-1.5997-3.999-2.5596-6.399-2.5596-3.039-.3199-5.919 1.2798-7.358 3.9993v-2.8795c0-.4799-.16-.7998-.48-1.1198-.32-.3199-.64-.3199-1.28 0l-5.919 3.0395c-.64.32-.96.6399-.96 1.1198v.16c0 .3199.16.6399.32.7998.32.32.48.48.8.6399.32.16.64.4799.8.7999.32.4799.32.7998.32 1.2798v11.6779c0 .7999-.48 1.7597-1.12 2.2396-.64.7999-1.12 1.2798-1.12 1.5997v.16c0 .4799.32.7999 1.12.7999h9.278c.8 0 1.12-.32 1.12-.7999v-.16c0-.3199-.32-.9598-1.12-1.5997-.64-.6399-.959-1.4397-1.119-2.2396v-11.358c0-1.4397.319-2.8795 1.119-3.9993.8-.9598 1.92-1.5997 3.2-1.4397 2.719 0 4.159 2.5595 4.319 7.5186l.48 9.2784c0 .7999-.32 1.7597-.8 2.2396s-.8.9598-.96 1.5997v.16c0 .4799.32.7999 1.12.7999h8.639c.799 0 1.119-.32 1.119-.7999v-.16c-.16-.6399-.48-1.1198-.8-1.5997-.159-.4799-.479-1.2798-.639-2.0796z"></path>
                          <path d="m197.738 84.0903c-.48-.16-.96.16-1.119.4799-.48 1.4398-1.92 2.5596-3.52 2.2396-.64 0-1.44-.3199-1.76-.7998-.479-.6399-.799-1.4398-.639-2.2396v-13.1177h5.759c.319 0 .479-.16.639-.32.16-.1599.32-.4799.32-.7998v-.7999c0-.3199-.16-.4799-.32-.7999-.16-.1599-.479-.3199-.639-.3199h-5.759v-4.9591c0-.7999-.32-1.1198-1.12-1.1198h-.96c-.64 0-.96.3199-1.12 1.1198-.16 1.4397-.8 2.5595-1.76 3.6793-.959.9599-2.239 1.4398-3.519 1.2798h-1.28c-.64 0-.96.3199-.96 1.1198v.7999.1599c0 .4799.48.7999.96.7999h2.4v12.9577c-.16 2.2396.64 4.6392 2.079 6.3989 1.44 1.4397 3.52 2.3996 5.6 2.2396 2.079.16 4.159-.7999 5.599-2.2396 1.279-1.2798 2.079-3.1994 2.079-5.1191-.16-.32-.48-.6399-.96-.6399z"></path>
                          <path d="m211.656 90.8091c0-.3199-.32-.9598-1.12-1.5997-.64-.4799-.959-1.2798-1.119-2.2396v-31.8344c0-.4799-.16-.7999-.48-.9598-.48-.16-1.12-.16-1.6.1599l-6.239 3.0395c-.64.32-.96.6399-.96.9598v.16c0 .32.32.7999.96 1.4398.64.6398.96 1.4397.96 2.3995v24.6357c0 .7999-.32 1.5997-.96 2.2396-.64.7999-.96 1.2798-.96 1.5997v.16c0 .4799.32.7999 1.12.7999h9.278c.8 0 1.12-.32 1.12-.7999z"></path>
                          <path d="m239.331 67.7732h-6.079c-.64 0-1.12.3199-1.12.7999v.1599c0 .32.32.6399.8 1.1198.48.32.96.7999 1.28 1.2798s.32 1.2798 0 2.3996l-5.439 12.7977-5.919-13.5976c-.32-.6399-.32-1.2798-.32-1.9196.16-.32.32-.7999.64-1.1198.32-.32.48-.6399.48-.9599 0-.6399-.32-.7998-.96-.7998h-9.438c-.64 0-1.12.3199-1.12.7998.16.6399.48 1.2798 1.12 1.7597.64.6399 1.12 1.4398 1.599 2.2396l9.919 20.4764c-1.92 4.6392-3.52 7.0383-5.119 7.0383-.64 0-1.12-.3195-1.44-.9594-.32-.6398-.64-1.2797-.8-2.0796s-.48-1.4397-1.12-2.0796c-.48-.6399-1.28-.9599-2.239-.9599-.8 0-1.6.32-2.24.7999-.48.6399-.8 1.4397-.8 2.2396 0 1.4398.8 2.88 2.08 3.679 1.439 1.12 3.359 1.76 5.279 1.6.96 0 1.919-.16 2.879-.64.8-.32 1.6-.96 2.24-1.44.64-.6394 1.28-1.4393 1.76-2.2392.639-.9598 1.119-1.7596 1.439-2.3995s.64-1.4398 1.12-2.3996l9.438-20.4764c.32-.7999.96-1.4398 1.44-2.0796.48-.48.96-1.1198.96-1.7597v-.16c.64-.9598.32-1.1198-.32-1.1198z"></path>
                        </g>
                      </svg>
                      <div className="mt0-l mt650">
                        <a
                          className="button mb0-ns mb600 mr500-ns mt400-l w-100p w-auto-ns"
                          href="#"
                        >
                          {" "}
                          Start Your Free Trial{" "}
                        </a>
                        <a
                          className="bg--neutral-0 button c--neutral-900 hover-bg--neutral-100 hover-c--neutral-900 mt400-l w-100p w-auto-ns"
                          href="#"
                        >
                          {" "}
                          Request a Demo{" "}
                        </a>
                      </div>
                      <p className="f200-l f300 fw-semibold mt450-ns mt500">
                        {" "}
                        No credit card required.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        <footer
          className="SF bg--background z1 pt600 pt0-ns ff-proxima-nova dn-p relative "
          role="contentinfo"
        >
          <div
            id="subscribe-desktop"
            className="dn db-l bg--background-light py650"
          >
            <div className="mw700 px400 flex-l items-start-l mx-auto">
              <div className="pt200">
                <svg
                  className="db h-auto"
                  width={40}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 148.8"
                >
                  <path
                    fill="#5ACC5A"
                    d="M51.2 0C22.9 0 0 22.9 0 51.2v94.2c0 3 3.7 4.5 5.8 2.4L33.6 120h35.2c28.3 0 51.2-22.9 51.2-51.2V0H51.2z"
                  ></path>
                  <path fill="#0EA84C" d="M33.6 120H8l16 9.6" />
                  <path fill="#2CB757" d="M120 0H51.2v68.8" />
                  <path
                    fill="#0EA84C"
                    d="M51.2 0C22.9 0 0 22.9 0 51.2V120l51.2-51.2V0z"
                  />
                  <path fill="#75DD66" d="M120 0L51.2 68.8H120" />
                  <path
                    fill="#5ACC5A"
                    d="M51.2 68.8L0 120h68.8c28.3 0 51.2-22.9 51.2-51.2H51.2z"
                  />
                </svg>
              </div>
              <div className="pl500 pr600">
                <h2 className="fw-extrabold f500 ff-proxima-nova">
                  Subscribe to our newsletter and get social media resources
                  sent to your inbox.
                </h2>
              </div>
              <div className="pt200">
                <button
                  className="button bg--blue-1000 hover-bg--blue-1100 wsnw"
                  data-a11y-dialog-show="newsletter-modal"
                >
                  Sign Me Up
                </button>
              </div>
            </div>
          </div>
          <footer className="w-full bg-gray-900 py-16">
            <div className="md:px-12 lg:px-28">
              <div className="container m-auto space-y-6  text-gray-300">
                {/* <img src="images/logo.svg" alt="logo tailus" class="m-auto w-40" /> */}
                <div
                  aria-label="FIght Cyber Bully"
                  className="c--neutral-600 m-auto flex w-8/12 items-center  justify-center "
                  title="FIght Cyber Bully"
                >
                  <svg
                    className="h600 flex"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 68"
                    height={36}
                    width={29}
                  >
                    <path
                      fill="#59cb59"
                      d="M23.4 0C10.5 0 0 10.5 0 23.4v43.1c0 1.4 1.7 2.1 2.6 1.1l12.7-12.7h16.1c12.9 0 23.4-10.5 23.4-23.4V0H23.4z"
                    ></path>
                    <path fill="#0ca750" d="M15.4 54.9H3.7l7.3 4.4z" />
                    <path fill="#2bb656" d="M54.9 0H23.4v31.5z" />
                    <path
                      fill="#0ca750"
                      d="M23.4 0C10.5 0 0 10.5 0 23.4v31.5l23.4-23.4V0z"
                    />
                    <path fill="#75dd66" d="M54.9 0L23.4 31.5h31.5z" />
                  </svg>
                  <div className="ml-2 text-lg font-semibold text-white">
                    {" "}
                    Fight Cyber Bully{" "}
                  </div>
                </div>
                <ul
                  role="list"
                  className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
                >
                  <li role="listitem">
                    <a href="#" className="hover:text-primary">
                      Home
                    </a>
                  </li>
                  <li role="listitem">
                    <a href="#" className="hover:text-primary">
                      Features
                    </a>
                  </li>
                  <li role="listitem">
                    <a href="#" className="hover:text-primary">
                      Get started
                    </a>
                  </li>
                  <li role="listitem">
                    <a href="#" className="hover:text-primary">
                      About us
                    </a>
                  </li>
                </ul>
                <div className="m-auto flex w-max items-center justify-between space-x-4">
                  <a href="#" aria-label="call">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="m-auto w-5"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="send mail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="m-auto w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="m-auto w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="linkedin"
                    target="blank"
                    aria-label="linkedin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="m-auto w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </a>
                </div>
                <div className="text-center">
                  <span className="text-sm tracking-wide">
                    Copyright © Fight Cyber Bully <span id="year" /> | All right
                    reserved
                  </span>
                </div>
              </div>
            </div>
          </footer>
          <div
            id="newsletter-modal"
            className="bottom0 h-100p left0 right0 top0 w-100p z23 fixed flex items-center justify-center overflow-y-auto overflow-x-hidden"
            aria-labelledby="newsletter-signup-label"
            aria-hidden="true"
            data-a11y-dialog=""
            aria-modal="true"
            tabIndex={-1}
            role="dialog"
          >
            <div
              className="bg--light-translucent bottom0 h-100p left0 right0 top0 w-100p z23 fixed"
              data-a11y-dialog-hide=""
            ></div>
            <div
              className="w-100p mw800 pa500 pa700-l bg--background-dark c--text-inverse shadow-5 z24 relative mx-auto"
              role="dialog"
            >
              <h2
                id="newsletter-signup-label"
                className="f700 c--text-inverse mw600 ff-proxima-nova"
              >
                Get Social Media Tips Straight to Your Inbox and Become a Better
                Marketer
              </h2>
              <p>
                You’ll be joining nearly 300,000 marketers who subscribe to
                FIght Cyber Bully’s Insights blog.
              </p>
              <div id="mktoNewsletterSignup" className="ml-300 mr-300 mt300">
                <iframe
                  id="form638071718"
                  data-src="https://pages.connect.sproutsocial.com/Newsletter-Signup_LP-Form.html?source=Newsletter&Lead_Source_Details__c=NewsletterSignup-FooterDesktop&text-inverse=1"
                  title="Newsletter Signup Form"
                  className="db w-100p js-pardot-iframe"
                  height={100}
                  width={200}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-top-navigation allow-popups"
                  loading="lazy"
                  frameBorder={0}
                  src="./Sprout Social_ Social Media Management Solutions_files/saved_resource(3).html"
                />
              </div>
              <button
                className="bn mt0 right300 top300 absolute bg-none"
                aria-controls="newsletter-modal"
                aria-labelledby="newsletter-close"
                data-a11y-dialog-hide=""
              >
                <svg
                  className="db h450"
                  height={28}
                  role="img"
                  viewBox="0 0 320 512"
                  width={32}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                  ></path>
                </svg>
                <span id="newsletter-close" className="screenreader">
                  "Close this form"
                </span>
              </button>
            </div>
          </div>
          <style
            id="wistia_22_style"
            type="text/css"
            className="wistia_injected_style"
            dangerouslySetInnerHTML={{
              __html:
                "\n            @font-face {\n                font-family: 'WistiaPlayerInterNumbersSemiBold';\n                font-feature-settings: 'tnum' 1;\n                src: url(data:application/x-font-woff;charset=utf-8;base64,d09GMk9UVE8AAAaMAAwAAAAACgAAAAZBAAMD1wAAAAAAAAAAAAAAAAAAAAAAAAAADYpwGhQbIBwqBmAAgTIBNgIkAzAEBgWDGgcgGykJEZWkARP8KHCbm2tEznyIN98tPTUk9Ig3oiVV3pbDIzXa+f/fZgXpALFTZhBoMVFC9cp036dXvRKVmVnsxe+D+1NDQI5lG7ikZWEINIElTeBIdnxlhauQ5GQtoLHA/wN0riVdSx5xgbxF3KTbgnjVQ4B9P7YqCx7FpEZK+6ilx0AoopUh4aExJEKmkU+0ncdr4iFfKhdSFD9y91LCRaxNbVqvi0dND3rxI7ndUDR7EiwT3bhiua9krFA0oepCy2hCjwmjnjDjKjNTDz2ZuHtN8820Wfw/l8u4w4yV/f8/6uscs5rmiN00LcP4hAofyZUSyS3WinX0RGFFtnGrjj36x6dlNa57+PLTlrUisH2n9orfgd+R34XfDd0NsWDXwfwhvKHpbs3UBni37dBlPvO4KYn/PgylilcgSdw6sjsSSxsRGfIJgqhi14bKZCHcQvjUh/+3HMotTYrGLVYCxyMFjEnYC98yTAp6atAKVxaZ9eu2NMji8WTj4w/Y34elD60PPwb5bEywLqAX/amwmUo6TBCy14N/TL44jb3sE5JdUIPXXI0RBSoGt3BUObn4agKGIxxQhlyQacbstK4fS2mZoBtFNQ1bd+4zND2vQu6anl7gWFOj8MV2DVMtU44xMhpwElrrjA7zO5IqWojd/v1Vso6cqp91zC2YrGhDOy07Iqyza2q9smDIwUYek0AWbCt/8x78QmrzayQ6xtpmqfCYsLfgU9HdeP3UqutZTTNd/9Q8k08XzXzIxSdvLPda8YaeeZnkxUwql0nDKyUYdaWZjGAy7UDLHpVqBVHTxSV0wBy21El9u/491ik2J3YkdiP2LPZL41RBeeNUWtp97Bbn0Ee1g9wr9qqV/X+4R9nlPX03743dylnaXZyNp8v58yLOsFYCbUnCVQzjN+5QhlmKccO7aMkueWJggROd4qnw2x5LydUcg/NRamE3XMlkGovpRWPKWEavP74P2O1RANM/3gIIPJj7TX+lqU2geQuaBx4B/7cWAOx0ucTiEHYJU9y5DBuUMYNIHeHZz9tn+Fw2G5EBTqUlHRfRi4eB5wNlJsRsv5k4b6HyFkhIC6BO4LzPbWhW7rbCcxubeKHOc6UaBKZBMMd4j8XuRUynOCCa4EMfF9grkI1NcTaSAVtk1nrIOwFfeEBlQw4f4phb6zHzBOm0ZZ0dBcaZRVdYIo5xYiyOMEWONwQHmjKGE//VuRBgul1QrpyxmMvF4vGj0xfuuQrNt4tVTsRhEnjY9AuKa1FVLSEneQWzFd5WbO7hasX08ONUOVQgwQuVqACFXkSoIoUgK1hJEkAgbkG5CjqBS5wrRFuY2IfVwhRnLsVyZTZpatveGR4yEbYqbE6J80nM4aa+LD7Oqmr8PdSJFUQVynmgN4lerGQV1+uLdYzdOFWHPW/iK2gIQayhizQ0NMwyvBEBlrDczRfmU40CTtAHqLQGnjQG8MYkxm1MwJuTqjHwVCu9iRJ1C8ojWGHxUYowH0c5X57zpXquvlw0wzHHGMTfufxiJ1psFJTzq6nGeDvHF4LgmHHWCUViZBaInRn+cswnBi460RBPRYg9TRUQ0CZUC5LAT0qLLu50FpdTeBhjGf7/h4dg9hE0uqsBx/saOcYRDIfnOhfzGFBHyizcJK3p2edUjWrC0rn1aGjXtfVUCHMAKKhlxV8eTEIcV2jCOdKiqahv/MisrfRQVnxPJoOU62mR6pu2ZllIzo8zOZqQB7kWJXW2/c0aihata5PcIVJKfFRgHAETmEQVTCELptGMGcyigTnMJ1voUVN6uCZS9pV2hrwl7FYMvBwtUSd7L7E5qP9t7BIPRF7EcmA9ct2nIPHrxgWajtDltbXuBLuaY6qRZGa5ZlX5anfR0lYXaHUzVSFjZa8rfdhZ8rKXFZg21LVL5LFjI5TlDIbwnFGHE2dypHs6Q50N015dpOgLONEUlOqoiQgIaeCsjMq9gITDKwRMieQgKUy9UQY1BTFYZU2KpE2SkILMIjW8IdFwIKmMaK8oClJVssAEtFnz5dQ1s+w6EZoNGtPGQfzx+aoE8ikiP8GCYOWtgB+HBdWDaxACAZInVq14dZI85RRDvZGIghyONw59KV/BBEQ02P1ER8hmNGiURT2hQP8WfAY=);\n            }\n        ",
            }}
          />
        </footer>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
