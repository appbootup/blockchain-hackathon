import { FuseUtils } from '../../../../../core/fuseUtils';
import { MatChipInputEvent } from '@angular/material';

export class Farmer {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  idProof: string;
  idNumber: string;
  images: {
    default: boolean,
    id: string,
    url: string,
    type: string
  }[];
  farms: {
    id: string,
    produceType: string,
    weight: number,
    harvestDate: Date,
    description: string,
    auditCertificate: string,
    organicCertificate: string,
    timestamp: number
  }[];
  timestamp: number;

  constructor(farmer?) {
    farmer = farmer || {};
    this.id = farmer.id || FuseUtils.generateGUID();
    this.firstName = farmer.firstName || '';
    this.lastName = farmer.lastName || '';
    this.address = farmer.address || '';
    this.idProof = farmer.idProof || '';
    this.idNumber = farmer.idNumber || '';
    this.images = farmer.images || [];
    this.farms = farmer.farms || [];
  }
}
