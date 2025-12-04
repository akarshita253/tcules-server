import type { Schema, Struct } from '@strapi/strapi';

export interface BlogAndCasestudiesBlogOrCasestudyText
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_blog_or_casestudy_texts';
  info: {
    displayName: 'Blog or Casestudy text';
  };
  attributes: {
    blogContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface BlogAndCasestudiesCaseStudyPositioning
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_case_study_positionings';
  info: {
    displayName: 'Case Study Positioning';
  };
  attributes: {};
}

export interface BlogAndCasestudiesCodeSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_code_sections';
  info: {
    displayName: 'Code Section';
  };
  attributes: {
    codeSnippet: Schema.Attribute.RichText;
  };
}

export interface BlogAndCasestudiesCompanyProfile
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_company_profiles';
  info: {
    displayName: 'Company Profile';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlogAndCasestudiesIframe extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_iframes';
  info: {
    displayName: 'Iframe';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    embedCode: Schema.Attribute.Text;
    height: Schema.Attribute.Integer;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
    width: Schema.Attribute.Integer;
  };
}

export interface BlogAndCasestudiesProblemAndSolution
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_problem_and_solutions';
  info: {
    displayName: 'Problem and Solution';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface BlogAndCasestudiesSectionImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_section_images';
  info: {
    displayName: 'Section Image';
  };
  attributes: {
    imageSection: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Enumeration<
      ['default', 'twoLeftFocus', 'twoRightFocus', 'bento']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlogAndCasestudiesSepration extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_seprations';
  info: {
    displayName: 'Sepration';
  };
  attributes: {
    color: Schema.Attribute.String;
    marginBottom: Schema.Attribute.Integer;
    marginTop: Schema.Attribute.Integer;
    styles: Schema.Attribute.Enumeration<
      ['dashed', 'dotted', 'thick', 'solid']
    > &
      Schema.Attribute.DefaultTo<'solid'>;
    thickness: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface BlogAndCasestudiesTldrSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_tldr_sections';
  info: {
    displayName: 'Tldr Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    tdlrDescription: Schema.Attribute.Text;
  };
}

export interface BlogAndCasestudiesVideo extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.Blocks;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    videoFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsButtons extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Buttons';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
  };
}

export interface ElementsElements extends Struct.ComponentSchema {
  collectionName: 'components_elements_elements';
  info: {
    displayName: 'Elements';
  };
  attributes: {};
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
  };
}

export interface NavbarNavbarLevel1Group extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_level1_groups';
  info: {
    displayName: 'Navbar Level1 Group';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    isSubMenuAvailable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String;
    navLevelTwoGroup: Schema.Attribute.Component<
      'navbar.navbar-level2-group',
      true
    >;
  };
}

export interface NavbarNavbarLevel2Group extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_level2_groups';
  info: {
    displayName: 'Navbar Level2 Group';
  };
  attributes: {
    hasSubMenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    href: Schema.Attribute.String;
    levelTwoLinks: Schema.Attribute.Component<'elements.link', true>;
    name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProfile extends Struct.ComponentSchema {
  collectionName: 'components_shared_profiles';
  info: {
    displayName: 'Profile';
  };
  attributes: {
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
    profilePicture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-and-casestudies.blog-or-casestudy-text': BlogAndCasestudiesBlogOrCasestudyText;
      'blog-and-casestudies.case-study-positioning': BlogAndCasestudiesCaseStudyPositioning;
      'blog-and-casestudies.code-section': BlogAndCasestudiesCodeSection;
      'blog-and-casestudies.company-profile': BlogAndCasestudiesCompanyProfile;
      'blog-and-casestudies.iframe': BlogAndCasestudiesIframe;
      'blog-and-casestudies.problem-and-solution': BlogAndCasestudiesProblemAndSolution;
      'blog-and-casestudies.section-image': BlogAndCasestudiesSectionImage;
      'blog-and-casestudies.sepration': BlogAndCasestudiesSepration;
      'blog-and-casestudies.tldr-section': BlogAndCasestudiesTldrSection;
      'blog-and-casestudies.video': BlogAndCasestudiesVideo;
      'elements.buttons': ElementsButtons;
      'elements.elements': ElementsElements;
      'elements.link': ElementsLink;
      'navbar.navbar-level1-group': NavbarNavbarLevel1Group;
      'navbar.navbar-level2-group': NavbarNavbarLevel2Group;
      'shared.media': SharedMedia;
      'shared.profile': SharedProfile;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
