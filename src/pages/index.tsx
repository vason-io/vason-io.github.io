import React, { type ReactElement } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import DemoImageUrl from "@site/static/img/demo.jpg";

import styles from "./index.module.css";
import { config } from "@site/src/util/config";

function HomepageHeader(): ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {config.isDev && (
            <Link
              className="button button--secondary button--lg"
              to="documentation"
            >
              Documentation
            </Link>
          )}

          <Link className="button button--secondary button--lg" to="support">
            Support
          </Link>
        </div>
      </div>
      <div className={styles.demoContainer}>
        <img src={DemoImageUrl} alt="Demo image" />
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Visualize and Analyze JSON"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
