import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ modelName: 'plc-data', charset: 'utf8', collate: 'utf8_unicode_ci' , timestamps: true})
export class PlcData extends Model<PlcData> {
  @Column({
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
    primaryKey: true,
  })
  id: string;
  @Column
  code: string;
  @Column
  name: string;

  @Column
  str_val: string;

  @Column
  num_val: Date;

}
