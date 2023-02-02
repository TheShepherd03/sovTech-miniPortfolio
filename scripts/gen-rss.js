const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Sakhiseni',
    site_url: 'https://mini_portfolio.com',
    
  })

}

generate()
