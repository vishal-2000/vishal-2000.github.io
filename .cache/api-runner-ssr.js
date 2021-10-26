var plugins = [{
      name: 'gatsby-plugin-mdx',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-remark-images","id":"c36b7c59-1cb1-595a-a6dd-ae458ee674ea","name":"gatsby-remark-images","version":"6.0.0","pluginOptions":{"plugins":[],"maxWidth":960,"quality":90,"linkImagesToOriginal":false,"backgroundColor":"transparent","showCaptions":false,"markdownCaptions":false,"withWebp":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"lessBabel":true,"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-remark-images","id":"4e9ee617-0e6c-5281-a705-2e6844a4e207","name":"gatsby-remark-images","version":"6.0.0","modulePath":"/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":960,"quality":90,"linkImagesToOriginal":false,"backgroundColor":"transparent"},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{},"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-theme-ui',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-omni-font-loader',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-omni-font-loader/gatsby-ssr'),
      options: {"plugins":[],"enableListener":true,"preconnect":["https://fonts.gstatic.com"],"interval":300,"timeout":30000,"web":[{"name":"IBM Plex Sans","file":"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"}]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Vishal's Blog","short_name":"Vishal's Blog","description":"Blog on some interesting projects, math and intelligence","start_url":"/","background_color":"#fff","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title: siteTitle\n                description: siteDescription\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allPost(sort: { fields: date, order: DESC }) {\n                  nodes {\n                    title\n                    date(formatString: \"MMMM D, YYYY\")\n                    excerpt\n                    slug\n                  }\n                }\n              }\n            ","output":"rss.xml","title":"Vishal's Blog"}]},
    },{
      name: 'gatsby-plugin-gatsby-cloud',
      plugin: require('/home/vishal/Volume_E/Active/personal_website_rebuild/blog_with_gatsby/vishal-2000.github.io/node_modules/gatsby-plugin-gatsby-cloud/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
