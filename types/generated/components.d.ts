import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAboutUs extends Schema.Component {
  collectionName: 'components_about_us_about_uses';
  info: {
    displayName: 'about-us';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    percentage: Attribute.Component<'percentage.percentage', true> &
      Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    image2: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    number: Attribute.Integer & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ClientsClientsTestimonials extends Schema.Component {
  collectionName: 'components_clients_clients_testimonials';
  info: {
    displayName: 'Clients_Testimonials';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Our_clients: Attribute.Component<'members.latest-project', true>;
  };
}

export interface MembersLatestProject extends Schema.Component {
  collectionName: 'components_members_latest_projects';
  info: {
    displayName: 'Latest_Project';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface MembersMember extends Schema.Component {
  collectionName: 'components_members_members';
  info: {
    displayName: 'member';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images', true> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    profession: Attribute.String & Attribute.Required;
  };
}

export interface MembersOurTeamMembers extends Schema.Component {
  collectionName: 'components_members_our_team_members';
  info: {
    displayName: 'Our_team_members';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Member: Attribute.Component<'members.member', true> & Attribute.Required;
  };
}

export interface PercentagePercentage extends Schema.Component {
  collectionName: 'components_percentage_percentages';
  info: {
    displayName: 'percentage';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    number: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'banner.banner': BannerBanner;
      'cards.card': CardsCard;
      'clients.clients-testimonials': ClientsClientsTestimonials;
      'members.latest-project': MembersLatestProject;
      'members.member': MembersMember;
      'members.our-team-members': MembersOurTeamMembers;
      'percentage.percentage': PercentagePercentage;
    }
  }
}
