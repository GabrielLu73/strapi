import type { Schema, Struct } from '@strapi/strapi';

export interface DetailClassroomsDetails extends Struct.ComponentSchema {
  collectionName: 'components_detail_classrooms_details';
  info: {
    displayName: 'ClassroomsDetails';
    icon: 'apps';
  };
  attributes: {
    classroom: Schema.Attribute.Integer;
    schedule: Schema.Attribute.Time &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'00:00:00.000'>;
    scheduleEnd: Schema.Attribute.Time & Schema.Attribute.Required;
  };
}

export interface DetailDetails extends Struct.ComponentSchema {
  collectionName: 'components_detail_details';
  info: {
    description: '';
    displayName: 'EventsDetails';
  };
  attributes: {
    detailDate: Schema.Attribute.Date & Schema.Attribute.Required;
    detailHour: Schema.Attribute.Time;
    detailPlace: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DetailProfessorDetails extends Struct.ComponentSchema {
  collectionName: 'components_detail_professor_details';
  info: {
    displayName: 'ProfessorDetails';
  };
  attributes: {
    experience: Schema.Attribute.String;
    specialism: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GaleriaEnlace extends Struct.ComponentSchema {
  collectionName: 'components_galeria_enlaces';
  info: {
    displayName: 'enlace';
    icon: 'cursor';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String;
  };
}

export interface GaleriaImages extends Struct.ComponentSchema {
  collectionName: 'components_galeria_images';
  info: {
    displayName: 'images';
    icon: 'landscape';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GaleriaRichtext extends Struct.ComponentSchema {
  collectionName: 'components_galeria_richtexts';
  info: {
    displayName: 'richtext';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface MaterialMaterialAudio extends Struct.ComponentSchema {
  collectionName: 'components_material_material_audios';
  info: {
    displayName: 'materialAudio';
    icon: 'microphone';
  };
  attributes: {
    audio: Schema.Attribute.Media<'audios'>;
  };
}

export interface MaterialMaterialImages extends Struct.ComponentSchema {
  collectionName: 'components_material_material_images';
  info: {
    description: '';
    displayName: 'materialImages';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface MaterialMaterialText extends Struct.ComponentSchema {
  collectionName: 'components_material_material_texts';
  info: {
    description: '';
    displayName: 'materialFiles';
  };
  attributes: {
    files: Schema.Attribute.Media<'files'>;
  };
}

export interface MaterialMaterialVideos extends Struct.ComponentSchema {
  collectionName: 'components_material_material_videos';
  info: {
    displayName: 'materialVideos';
    icon: 'play';
  };
  attributes: {
    videos: Schema.Attribute.Media<'videos'>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'detail.classrooms-details': DetailClassroomsDetails;
      'detail.details': DetailDetails;
      'detail.professor-details': DetailProfessorDetails;
      'galeria.enlace': GaleriaEnlace;
      'galeria.images': GaleriaImages;
      'galeria.richtext': GaleriaRichtext;
      'material.material-audio': MaterialMaterialAudio;
      'material.material-images': MaterialMaterialImages;
      'material.material-text': MaterialMaterialText;
      'material.material-videos': MaterialMaterialVideos;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
