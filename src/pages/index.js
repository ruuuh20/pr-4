import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Module from "../components/module"
import ModuleMiddle from "../components/moduleMiddle"
import Newsletter from "../components/Newsletter"
import Featured from "../components/Featured"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Module />
    <ModuleMiddle />
    <Newsletter />
    <Featured />
  </Layout>
)

export default IndexPage
