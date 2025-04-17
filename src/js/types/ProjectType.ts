export type ProjectType = {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  path: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  tool_data: [
    {
      name: string;
      id: string;
    },
  ];
  acf: {
    mockup_desktop: {
      url: string;
    };
    mockup_mobile: {
      url: string;
    };
    website_url: string;
    figma_url: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
      },
    ];
  };
};
