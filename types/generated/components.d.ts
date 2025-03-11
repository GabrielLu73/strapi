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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'detail.classrooms-details': DetailClassroomsDetails;
      'detail.details': DetailDetails;
      'detail.professor-details': DetailProfessorDetails;
      'material.material-audio': MaterialMaterialAudio;
      'material.material-images': MaterialMaterialImages;
      'material.material-text': MaterialMaterialText;
      'material.material-videos': MaterialMaterialVideos;
    }
  }
}
