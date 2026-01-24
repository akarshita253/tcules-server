import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutFifthSection extends Struct.ComponentSchema {
  collectionName: 'components_about_about_fifth_sections';
  info: {
    displayName: 'About Fifth Section';
  };
  attributes: {
    cardDetails: Schema.Attribute.Component<
      'about.about-fifth-section-cards',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface AboutAboutFifthSectionCards extends Struct.ComponentSchema {
  collectionName: 'components_about_about_fifth_section_cards';
  info: {
    displayName: 'About Fifth Section Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    designation: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    isImageVisible: Schema.Attribute.Boolean;
    profilePicture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AboutAboutFourthSection extends Struct.ComponentSchema {
  collectionName: 'components_about_about_fourth_sections';
  info: {
    displayName: 'About Fourth Section';
  };
  attributes: {
    accordianDetails: Schema.Attribute.Component<
      'about.about-fourth-section-details',
      true
    >;
    label: Schema.Attribute.String;
  };
}

export interface AboutAboutFourthSectionDetails extends Struct.ComponentSchema {
  collectionName: 'components_about_about_fourth_section_details';
  info: {
    displayName: 'About Fourth Section Details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface AboutAboutSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_about_about_second_sections';
  info: {
    displayName: 'About Second Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AboutAboutSeventhSection extends Struct.ComponentSchema {
  collectionName: 'components_about_about_seventh_sections';
  info: {
    displayName: 'About Seventh Section';
  };
  attributes: {
    cardDetails: Schema.Attribute.Component<
      'about.seventh-section-cards',
      true
    >;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface AboutAboutSixthSection extends Struct.ComponentSchema {
  collectionName: 'components_about_about_sixth_sections';
  info: {
    displayName: 'About Sixth Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sixthSectionCards: Schema.Attribute.Component<
      'about.about-fifth-section-cards',
      true
    >;
  };
}

export interface AboutSeventhSectionCards extends Struct.ComponentSchema {
  collectionName: 'components_about_seventh_section_cards';
  info: {
    displayName: 'Seventh Section Cards';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

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

export interface BlogAndCasestudiesCtoSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_and_casestudies_cto_sections';
  info: {
    displayName: 'CTO Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
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

export interface CapablitiesCapablitiesCardSection
  extends Struct.ComponentSchema {
  collectionName: 'components_capablities_capablities_card_sections';
  info: {
    displayName: 'Capablities Card Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sectionCards: Schema.Attribute.Component<
      'capablities.capablities-cards',
      true
    >;
    serviceName: Schema.Attribute.Enumeration<
      ['HowWeWork', 'AI', 'Design', 'Engineering', 'CommonEntryPoints']
    >;
    subRouteLink: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface CapablitiesCapablitiesCards extends Struct.ComponentSchema {
  collectionName: 'components_capablities_capablities_cards';
  info: {
    displayName: 'Capablities Cards';
  };
  attributes: {
    cardPoints: Schema.Attribute.Component<'elements.points', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface CareerCareerCards extends Struct.ComponentSchema {
  collectionName: 'components_career_career_cards';
  info: {
    displayName: 'Career Cards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CareerCareerFifthSection extends Struct.ComponentSchema {
  collectionName: 'components_career_career_fifth_sections';
  info: {
    displayName: 'Career Fifth Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    rightSection: Schema.Attribute.Component<
      'career.third-right-section',
      false
    >;
  };
}

export interface CareerCareerFourthSection extends Struct.ComponentSchema {
  collectionName: 'components_career_career_fourth_sections';
  info: {
    displayName: 'Career Fourth Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    headingTwo: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightSection: Schema.Attribute.Component<
      'career.third-right-section',
      false
    >;
  };
}

export interface CareerCareerFourthSectionNew extends Struct.ComponentSchema {
  collectionName: 'components_career_career_fourth_section_news';
  info: {
    displayName: 'Career Fourth Section New';
  };
  attributes: {
    bottomHeading: Schema.Attribute.String;
    bottomLink: Schema.Attribute.Component<'elements.link', false>;
    cards: Schema.Attribute.Component<'career.career-new-cards', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface CareerCareerIconPoints extends Struct.ComponentSchema {
  collectionName: 'components_career_career_icon_points';
  info: {
    displayName: 'Career Icon Points';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Schema.Attribute.Text;
  };
}

export interface CareerCareerNewCards extends Struct.ComponentSchema {
  collectionName: 'components_career_career_new_cards';
  info: {
    displayName: 'Career New Cards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface CareerCareerSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_career_career_second_sections';
  info: {
    displayName: 'Career Second Section';
  };
  attributes: {
    cardDetails: Schema.Attribute.Component<'career.career-cards', true>;
    heading: Schema.Attribute.String;
  };
}

export interface CareerCareerThirdSection extends Struct.ComponentSchema {
  collectionName: 'components_career_career_third_sections';
  info: {
    displayName: 'Career Third Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    openings: Schema.Attribute.Relation<'oneToMany', 'api::opening.opening'>;
  };
}

export interface CareerThirdRightSection extends Struct.ComponentSchema {
  collectionName: 'components_career_third_right_sections';
  info: {
    displayName: 'Third Right Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    rightSectionPoints: Schema.Attribute.Component<
      'career.career-icon-points',
      true
    >;
  };
}

export interface ContactUsContactUsBottomCards extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_us_bottom_cards';
  info: {
    displayName: 'Contact Us Bottom Cards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ContactUsSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {};
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

export interface ElementsPoints extends Struct.ComponentSchema {
  collectionName: 'components_elements_points';
  info: {
    displayName: 'Points';
  };
  attributes: {
    listText: Schema.Attribute.String;
  };
}

export interface EventsEventDetails extends Struct.ComponentSchema {
  collectionName: 'components_events_event_details';
  info: {
    displayName: 'Event Details';
  };
  attributes: {
    descOne: Schema.Attribute.String;
    descTwo: Schema.Attribute.String;
  };
}

export interface FooterFooterLegalSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_legal_sections';
  info: {
    displayName: 'Footer Legal Section';
  };
  attributes: {
    address: Schema.Attribute.Text;
    legalLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Links';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    links: Schema.Attribute.Component<'footer.pages-links', true>;
  };
}

export interface FooterFooterSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_social_media_links';
  info: {
    displayName: 'Footer Social Media Links';
  };
  attributes: {
    label: Schema.Attribute.String;
    rightSection: Schema.Attribute.Component<
      'footer.footer-social-media-right-section',
      false
    >;
    socialMedia: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface FooterFooterSocialMediaRightSection
  extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_social_media_right_sections';
  info: {
    displayName: 'Footer Social Media Right Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface FooterPagesLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_pages_links';
  info: {
    displayName: 'Pages Links';
  };
  attributes: {
    heading: Schema.Attribute.String;
    pageLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface HomepageBranchCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_branch_cards';
  info: {
    displayName: 'Branch Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageFourthSectionCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_fourth_section_cards';
  info: {
    displayName: 'Fourth Section Cards';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Schema.Attribute.String;
  };
}

export interface HomepageHomepageContactAndTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_contact_and_testimonials';
  info: {
    displayName: 'Homepage Contact And Testimonials';
  };
  attributes: {
    client_detail: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    heading: Schema.Attribute.String;
    testimonial: Schema.Attribute.Relation<
      'oneToOne',
      'api::testimonial.testimonial'
    >;
  };
}

export interface HomepageHomepageFifthSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_fifth_sections';
  info: {
    displayName: 'Homepage Fifth Section';
  };
  attributes: {
    blogsDetails: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomepageHomepageFourthSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_fourth_sections';
  info: {
    displayName: 'Homepage Fourth Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    cards: Schema.Attribute.Component<'homepage.fourth-section-cards', true>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageHomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_hero_sections';
  info: {
    displayName: 'Homepage Hero Section';
  };
  attributes: {
    bottomTags: Schema.Attribute.Component<'elements.points', true>;
    button: Schema.Attribute.Component<'elements.link', true>;
    descriptionOne: Schema.Attribute.Text;
    descriptionTwo: Schema.Attribute.Text;
    headingOne: Schema.Attribute.String;
    headingTwo: Schema.Attribute.String;
    rightSectionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageHomepageSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_second_sections';
  info: {
    displayName: 'Homepage Second Section';
  };
  attributes: {
    secondSection: Schema.Attribute.Component<
      'homepage.homepage-second-section-points',
      true
    >;
  };
}

export interface HomepageHomepageSecondSectionPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_second_section_points';
  info: {
    displayName: 'Homepage Second Section Points';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<
      'homepage.second-section-case-study-relation',
      false
    >;
  };
}

export interface HomepageHomepageThirdSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_third_sections';
  info: {
    displayName: 'Homepage Third Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'homepage.branch-cards', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageSecondSectionCaseStudyRelation
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_second_section_case_study_relations';
  info: {
    displayName: 'Second Section Case Study Relation';
  };
  attributes: {
    botomImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    case_study: Schema.Attribute.Relation<
      'oneToOne',
      'api::case-study.case-study'
    >;
  };
}

export interface HowWeWorkCardDetails extends Struct.ComponentSchema {
  collectionName: 'components_how_we_work_card_details';
  info: {
    displayName: 'cardDetails';
  };
  attributes: {};
}

export interface HowWeWorkCards extends Struct.ComponentSchema {
  collectionName: 'components_how_we_work_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'elements.points', true>;
  };
}

export interface HowWeWorkHowWeWorkHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_how_we_work_how_we_work_hero_sections';
  info: {
    displayName: 'How We Work Hero Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.buttons', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HowWeWorkLowFrictionWays extends Struct.ComponentSchema {
  collectionName: 'components_how_we_work_low_friction_ways';
  info: {
    displayName: 'Low Friction Ways';
  };
  attributes: {
    details: Schema.Attribute.Component<'how-we-work.cards', true>;
    heading: Schema.Attribute.String;
  };
}

export interface HowWeWorkRightDetails extends Struct.ComponentSchema {
  collectionName: 'components_how_we_work_right_details';
  info: {
    displayName: 'rightDetails';
  };
  attributes: {
    description: Schema.Attribute.Component<'elements.points', true>;
    heading: Schema.Attribute.String;
  };
}

export interface HowWeWorkRightStartingPoint extends Struct.ComponentSchema {
  collectionName: 'components_how_we_work_right_starting_points';
  info: {
    displayName: 'Right Starting Point';
  };
  attributes: {
    heading: Schema.Attribute.String;
    leftCard: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface LabsFilCardDetails extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_card_details';
  info: {
    displayName: 'cardDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LabsFilLabsFilEighthSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_eighth_sections';
  info: {
    displayName: 'Labs FIL Eighth Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LabsFilLabsFilFifthSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_fifth_sections';
  info: {
    displayName: 'Labs FIL Fifth Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'labs-fil.card-details', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface LabsFilLabsFilFourthSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_fourth_sections';
  info: {
    displayName: 'Labs FIL Fourth Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    fourthSection: Schema.Attribute.Component<
      'labs-fil.labs-fil-second-section',
      false
    >;
  };
}

export interface LabsFilLabsFilHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_hero_sections';
  info: {
    displayName: 'Labs FIL Hero Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface LabsFilLabsFilSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_second_sections';
  info: {
    displayName: 'Labs FIL Second Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'labs-fil.card-details', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LabsFilLabsFilSeventhSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_seventh_sections';
  info: {
    displayName: 'Labs FIL Seventh Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.String;
  };
}

export interface LabsFilLabsFilSixthSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_sixth_sections';
  info: {
    displayName: 'Labs FIL Sixth Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    leftCard: Schema.Attribute.Component<
      'labs-fil.sixth-section-left-card',
      false
    >;
    rightCard: Schema.Attribute.Component<
      'labs-fil.sixth-section-right-card',
      true
    >;
  };
}

export interface LabsFilLabsFilThirdSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_labs_fil_third_sections';
  info: {
    displayName: 'Labs FIL Third Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'labs-fil.third-section-cards', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LabsFilSixthSectionLeftCard extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_sixth_section_left_cards';
  info: {
    displayName: 'Sixth Section Left Card';
  };
  attributes: {
    bottomText: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    heading: Schema.Attribute.String;
  };
}

export interface LabsFilSixthSectionRightCard extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_sixth_section_right_cards';
  info: {
    displayName: 'Sixth Section Right Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface LabsFilThirdSectionCards extends Struct.ComponentSchema {
  collectionName: 'components_labs_fil_third_section_cards';
  info: {
    displayName: 'thirdSectionCards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LabsCardSection extends Struct.ComponentSchema {
  collectionName: 'components_labs_card_sections';
  info: {
    displayName: 'cardSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface LabsLabsInterface extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_interface_s';
  info: {
    displayName: 'Labs Interface ';
  };
  attributes: {
    labsInterfaceCards: Schema.Attribute.Component<
      'labs.labs-interface-cards',
      true
    >;
  };
}

export interface LabsLabsInterfaceCards extends Struct.ComponentSchema {
  collectionName: 'components_labs_labs_interface_cards';
  info: {
    displayName: 'Labs Interface Cards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LegalDetails extends Struct.ComponentSchema {
  collectionName: 'components_legal_details';
  info: {
    displayName: 'Details';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    heading: Schema.Attribute.String;
  };
}

export interface MatterDesignMatterDesignCards extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_cards';
  info: {
    displayName: 'Matter Design Cards';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface MatterDesignMatterDesignContactUs
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_contact_uses';
  info: {
    displayName: 'Matter Design Contact Us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headingOne: Schema.Attribute.String;
    headingTwo: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MatterDesignMatterDesignDisplayCards
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_display_cards';
  info: {
    displayName: 'Matter Design Display Cards';
  };
  attributes: {
    d: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface MatterDesignMatterDesignFifthSection
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_fifth_sections';
  info: {
    displayName: 'Matter Design Fifth Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<
      'matter-design.matter-design-cards',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface MatterDesignMatterDesignFourthSection
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_fourth_sections';
  info: {
    displayName: 'Matter Design Fourth Section';
  };
  attributes: {
    displayCards: Schema.Attribute.Component<
      'matter-design.matter-design-display-cards',
      true
    >;
  };
}

export interface MatterDesignMatterDesignHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_hero_sections';
  info: {
    displayName: 'Matter Design Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headingOne: Schema.Attribute.String;
    headingTwo: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface MatterDesignMatterDesignSecondSection
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_second_sections';
  info: {
    displayName: 'Matter Design Second Section';
  };
  attributes: {
    cardDetails: Schema.Attribute.Component<
      'matter-design.matter-design-cards',
      true
    >;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MatterDesignMatterDesignStripOne
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_strip_ones';
  info: {
    displayName: 'Matter Design Strip One';
  };
  attributes: {
    bgIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface MatterDesignMatterDesignThirdSection
  extends Struct.ComponentSchema {
  collectionName: 'components_matter_design_matter_design_third_sections';
  info: {
    displayName: 'Matter Design Third Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<
      'matter-design.matter-design-cards',
      true
    >;
    heading: Schema.Attribute.String;
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
    description: Schema.Attribute.Text;
    hasSubMenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    href: Schema.Attribute.String;
    levelTwoLinks: Schema.Attribute.Component<'elements.link', true>;
    name: Schema.Attribute.String;
  };
}

export interface PodcasteEventsInterviewsShadowCard
  extends Struct.ComponentSchema {
  collectionName: 'components_podcaste_events_interviews_shadow_cards';
  info: {
    displayName: 'Shadow Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    isBackgroundAvailable: Schema.Attribute.Boolean;
    isShadowVisible: Schema.Attribute.Boolean;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface PspPspCards extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_cards';
  info: {
    displayName: 'Psp Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'elements.link', false>;
    points: Schema.Attribute.Component<'elements.points', true>;
  };
}

export interface PspPspCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_cards_sections';
  info: {
    displayName: 'Psp Cards Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'psp.psp-cards', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface PspPspContactus extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_contactuses';
  info: {
    displayName: 'Psp Contactus';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface PspPspFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_faq_sections';
  info: {
    displayName: 'Psp Faq Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.String;
  };
}

export interface PspPspResourceSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_resource_sections';
  info: {
    displayName: 'Psp Resource Section';
  };
  attributes: {
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface PspPspSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_second_sections';
  info: {
    displayName: 'Psp Second Section';
  };
  attributes: {
    cardImage: Schema.Attribute.Component<'shared.media', true>;
    heading: Schema.Attribute.String;
  };
}

export interface PspPspSixthSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_sixth_sections';
  info: {
    displayName: 'Psp Sixth Section';
  };
  attributes: {
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface PspPspTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_testimonial_sections';
  info: {
    displayName: 'Psp Testimonial Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface PspPspThirdSection extends Struct.ComponentSchema {
  collectionName: 'components_psp_psp_third_sections';
  info: {
    displayName: 'Psp Third Section';
  };
  attributes: {
    bottomIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bottomLink: Schema.Attribute.Component<'elements.link', false>;
    descriptionBottom: Schema.Attribute.Text;
    descriptionTop: Schema.Attribute.Text;
    headingBottom: Schema.Attribute.String;
    headingTop: Schema.Attribute.String;
  };
}

export interface ResourcesCards extends Struct.ComponentSchema {
  collectionName: 'components_resources_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Schema.Attribute.String;
  };
}

export interface ResourcesFilterSection extends Struct.ComponentSchema {
  collectionName: 'components_resources_filter_sections';
  info: {
    displayName: 'Filter Section';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    label: Schema.Attribute.String;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'>;
  };
}

export interface ResourcesResourceFourthSection extends Struct.ComponentSchema {
  collectionName: 'components_resources_resource_fourth_sections';
  info: {
    displayName: 'Resource Fourth Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ResourcesResourceThirdSection extends Struct.ComponentSchema {
  collectionName: 'components_resources_resource_third_sections';
  info: {
    displayName: 'Resource Third Section';
  };
  attributes: {
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    filterResource: Schema.Attribute.Component<
      'resources.filter-section',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface ResourcesSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_resources_second_sections';
  info: {
    displayName: 'Second Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ServiceExploreRecentWork extends Struct.ComponentSchema {
  collectionName: 'components_service_explore_recent_works';
  info: {
    displayName: 'ExploreRecentWork';
  };
  attributes: {
    exploreCards: Schema.Attribute.Component<'shared.card', true>;
    exploreLink: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
  };
}

export interface ServiceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_service_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionTwo: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    heroSectionButton: Schema.Attribute.Component<'elements.buttons', true>;
    label: Schema.Attribute.Component<'elements.points', true>;
  };
}

export interface ServiceHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_service_how_we_works';
  info: {
    displayName: 'HowWeWork';
  };
  attributes: {
    heading: Schema.Attribute.String;
    howWeWorkCards: Schema.Attribute.Component<'shared.card', true>;
    labels: Schema.Attribute.Component<'elements.points', true>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ServiceOurOperatingPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_service_our_operating_philosophies';
  info: {
    displayName: 'OurOperatingPhilosophy';
  };
  attributes: {
    heading: Schema.Attribute.String;
    operatingPhilosophyCards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface ServiceServiceMisc extends Struct.ComponentSchema {
  collectionName: 'components_service_service_miscs';
  info: {
    displayName: 'ServiceMisc';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.buttons', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServiceWhatWeDesign extends Struct.ComponentSchema {
  collectionName: 'components_service_what_we_designs';
  info: {
    displayName: 'WhatWeDesign';
  };
  attributes: {
    bottomDetails: Schema.Attribute.Component<'shared.card', false>;
    heading: Schema.Attribute.String;
    whatWeDesignCards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface ServiceWhyTeamHireUs extends Struct.ComponentSchema {
  collectionName: 'components_service_why_team_hireuses';
  info: {
    displayName: 'WhyTeamHireUs';
  };
  attributes: {
    heading: Schema.Attribute.String;
    whyHireUsCards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.buttons', false>;
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardTiles: Schema.Attribute.Component<'shared.tiles', true>;
    description: Schema.Attribute.Blocks;
    details: Schema.Attribute.Component<'how-we-work.right-details', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isIconVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    list: Schema.Attribute.Component<'elements.points', true>;
  };
}

export interface SharedFocusString extends Struct.ComponentSchema {
  collectionName: 'components_shared_focus_strings';
  info: {
    displayName: 'Focus string';
  };
  attributes: {};
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    highlightedDescription: Schema.Attribute.Text;
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
    canonicalURL: Schema.Attribute.String;
    codeJson: Schema.Attribute.Blocks;
    focusString: Schema.Attribute.String;
    graphCode: Schema.Attribute.RichText;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    robots: Schema.Attribute.Enumeration<
      ['index', 'noindex', 'follow', 'nofollow']
    >;
    slug: Schema.Attribute.Text;
    structuredData: Schema.Attribute.Blocks;
  };
}

export interface SharedSeoFocus extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_foci';
  info: {
    displayName: 'SEO Focus';
  };
  attributes: {
    focusString: Schema.Attribute.Component<'shared.focus-string', true>;
  };
}

export interface SharedSeoOg extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_ogs';
  info: {
    displayName: 'Seo OG';
  };
  attributes: {
    og_description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    og_title: Schema.Attribute.String;
    twitter_card_type: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    >;
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

export interface SharedTiles extends Struct.ComponentSchema {
  collectionName: 'components_shared_tiles';
  info: {
    displayName: 'tiles';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SingleTypeCaseStudyPageHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_single_type_case_study_page_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.buttons', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SingleTypeCaseStudyPageMiscellaneous
  extends Struct.ComponentSchema {
  collectionName: 'components_single_type_case_study_page_miscellaneous';
  info: {
    displayName: 'Miscellaneous';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.buttons', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-fifth-section': AboutAboutFifthSection;
      'about.about-fifth-section-cards': AboutAboutFifthSectionCards;
      'about.about-fourth-section': AboutAboutFourthSection;
      'about.about-fourth-section-details': AboutAboutFourthSectionDetails;
      'about.about-second-section': AboutAboutSecondSection;
      'about.about-seventh-section': AboutAboutSeventhSection;
      'about.about-sixth-section': AboutAboutSixthSection;
      'about.seventh-section-cards': AboutSeventhSectionCards;
      'blog-and-casestudies.blog-or-casestudy-text': BlogAndCasestudiesBlogOrCasestudyText;
      'blog-and-casestudies.case-study-positioning': BlogAndCasestudiesCaseStudyPositioning;
      'blog-and-casestudies.code-section': BlogAndCasestudiesCodeSection;
      'blog-and-casestudies.company-profile': BlogAndCasestudiesCompanyProfile;
      'blog-and-casestudies.cto-section': BlogAndCasestudiesCtoSection;
      'blog-and-casestudies.iframe': BlogAndCasestudiesIframe;
      'blog-and-casestudies.problem-and-solution': BlogAndCasestudiesProblemAndSolution;
      'blog-and-casestudies.section-image': BlogAndCasestudiesSectionImage;
      'blog-and-casestudies.sepration': BlogAndCasestudiesSepration;
      'blog-and-casestudies.tldr-section': BlogAndCasestudiesTldrSection;
      'blog-and-casestudies.video': BlogAndCasestudiesVideo;
      'capablities.capablities-card-section': CapablitiesCapablitiesCardSection;
      'capablities.capablities-cards': CapablitiesCapablitiesCards;
      'career.career-cards': CareerCareerCards;
      'career.career-fifth-section': CareerCareerFifthSection;
      'career.career-fourth-section': CareerCareerFourthSection;
      'career.career-fourth-section-new': CareerCareerFourthSectionNew;
      'career.career-icon-points': CareerCareerIconPoints;
      'career.career-new-cards': CareerCareerNewCards;
      'career.career-second-section': CareerCareerSecondSection;
      'career.career-third-section': CareerCareerThirdSection;
      'career.third-right-section': CareerThirdRightSection;
      'contact-us.contact-us-bottom-cards': ContactUsContactUsBottomCards;
      'contact-us.social-media-links': ContactUsSocialMediaLinks;
      'elements.buttons': ElementsButtons;
      'elements.elements': ElementsElements;
      'elements.link': ElementsLink;
      'elements.points': ElementsPoints;
      'events.event-details': EventsEventDetails;
      'footer.footer-legal-section': FooterFooterLegalSection;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-social-media-links': FooterFooterSocialMediaLinks;
      'footer.footer-social-media-right-section': FooterFooterSocialMediaRightSection;
      'footer.pages-links': FooterPagesLinks;
      'homepage.branch-cards': HomepageBranchCards;
      'homepage.fourth-section-cards': HomepageFourthSectionCards;
      'homepage.homepage-contact-and-testimonials': HomepageHomepageContactAndTestimonials;
      'homepage.homepage-fifth-section': HomepageHomepageFifthSection;
      'homepage.homepage-fourth-section': HomepageHomepageFourthSection;
      'homepage.homepage-hero-section': HomepageHomepageHeroSection;
      'homepage.homepage-second-section': HomepageHomepageSecondSection;
      'homepage.homepage-second-section-points': HomepageHomepageSecondSectionPoints;
      'homepage.homepage-third-section': HomepageHomepageThirdSection;
      'homepage.second-section-case-study-relation': HomepageSecondSectionCaseStudyRelation;
      'how-we-work.card-details': HowWeWorkCardDetails;
      'how-we-work.cards': HowWeWorkCards;
      'how-we-work.how-we-work-hero-section': HowWeWorkHowWeWorkHeroSection;
      'how-we-work.low-friction-ways': HowWeWorkLowFrictionWays;
      'how-we-work.right-details': HowWeWorkRightDetails;
      'how-we-work.right-starting-point': HowWeWorkRightStartingPoint;
      'labs-fil.card-details': LabsFilCardDetails;
      'labs-fil.labs-fil-eighth-section': LabsFilLabsFilEighthSection;
      'labs-fil.labs-fil-fifth-section': LabsFilLabsFilFifthSection;
      'labs-fil.labs-fil-fourth-section': LabsFilLabsFilFourthSection;
      'labs-fil.labs-fil-hero-section': LabsFilLabsFilHeroSection;
      'labs-fil.labs-fil-second-section': LabsFilLabsFilSecondSection;
      'labs-fil.labs-fil-seventh-section': LabsFilLabsFilSeventhSection;
      'labs-fil.labs-fil-sixth-section': LabsFilLabsFilSixthSection;
      'labs-fil.labs-fil-third-section': LabsFilLabsFilThirdSection;
      'labs-fil.sixth-section-left-card': LabsFilSixthSectionLeftCard;
      'labs-fil.sixth-section-right-card': LabsFilSixthSectionRightCard;
      'labs-fil.third-section-cards': LabsFilThirdSectionCards;
      'labs.card-section': LabsCardSection;
      'labs.labs-interface': LabsLabsInterface;
      'labs.labs-interface-cards': LabsLabsInterfaceCards;
      'legal.details': LegalDetails;
      'matter-design.matter-design-cards': MatterDesignMatterDesignCards;
      'matter-design.matter-design-contact-us': MatterDesignMatterDesignContactUs;
      'matter-design.matter-design-display-cards': MatterDesignMatterDesignDisplayCards;
      'matter-design.matter-design-fifth-section': MatterDesignMatterDesignFifthSection;
      'matter-design.matter-design-fourth-section': MatterDesignMatterDesignFourthSection;
      'matter-design.matter-design-hero-section': MatterDesignMatterDesignHeroSection;
      'matter-design.matter-design-second-section': MatterDesignMatterDesignSecondSection;
      'matter-design.matter-design-strip-one': MatterDesignMatterDesignStripOne;
      'matter-design.matter-design-third-section': MatterDesignMatterDesignThirdSection;
      'navbar.navbar-level1-group': NavbarNavbarLevel1Group;
      'navbar.navbar-level2-group': NavbarNavbarLevel2Group;
      'podcaste-events-interviews.shadow-card': PodcasteEventsInterviewsShadowCard;
      'psp.psp-cards': PspPspCards;
      'psp.psp-cards-section': PspPspCardsSection;
      'psp.psp-contactus': PspPspContactus;
      'psp.psp-faq-section': PspPspFaqSection;
      'psp.psp-resource-section': PspPspResourceSection;
      'psp.psp-second-section': PspPspSecondSection;
      'psp.psp-sixth-section': PspPspSixthSection;
      'psp.psp-testimonial-section': PspPspTestimonialSection;
      'psp.psp-third-section': PspPspThirdSection;
      'resources.cards': ResourcesCards;
      'resources.filter-section': ResourcesFilterSection;
      'resources.resource-fourth-section': ResourcesResourceFourthSection;
      'resources.resource-third-section': ResourcesResourceThirdSection;
      'resources.second-section': ResourcesSecondSection;
      'service.explore-recent-work': ServiceExploreRecentWork;
      'service.hero-section': ServiceHeroSection;
      'service.how-we-work': ServiceHowWeWork;
      'service.our-operating-philosophy': ServiceOurOperatingPhilosophy;
      'service.service-misc': ServiceServiceMisc;
      'service.what-we-design': ServiceWhatWeDesign;
      'service.why-team-hire-us': ServiceWhyTeamHireUs;
      'shared.card': SharedCard;
      'shared.focus-string': SharedFocusString;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.profile': SharedProfile;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.seo-focus': SharedSeoFocus;
      'shared.seo-og': SharedSeoOg;
      'shared.slider': SharedSlider;
      'shared.tiles': SharedTiles;
      'single-type-case-study-page.hero-section': SingleTypeCaseStudyPageHeroSection;
      'single-type-case-study-page.miscellaneous': SingleTypeCaseStudyPageMiscellaneous;
    }
  }
}
