export enum OfficeAndGroupGuardParamsEntityEnum {
  INQUIRY = 'INQUIRY',
  INQUIRY_INVESTIGATED = 'INQUIRY_INVESTIGATED',
  INVESTIGATED = 'INVESTIGATED',
  INQUIRY_FILE = 'INQUIRY_FILE',
  INQUIRY_RETURNATION = 'INQUIRY_RETURNATION',
  PROSECUTOR_OFFICE_GROUP = 'PROSECUTOR_OFFICE_GROUP',
  POLICE_INQUIRY_NUMBER = 'POLICE_INQUIRY_NUMBER',
  MOVEMENT_TASK = 'MOVEMENT_TASK',
}

export class ProsecutorOfficeAndGroupGuardParamsDto {
  entity: OfficeAndGroupGuardParamsEntityEnum;
  path: string;
}
