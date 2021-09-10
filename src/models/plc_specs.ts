import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ modelName: 'plc-specs', charset: 'utf8', collate: 'utf8_unicode_ci' , timestamps: true})
export class PlcSpec extends Model<PlcSpec> {
  @Column({
    defaultValue: DataType.INTEGER,
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: string;

  @Column
  code: string;

  @Column
  name: string;

  @Column
  unit: string;

  @Column
  manufacturer: string;

  @Column
  model: string;
  
  @Column
  kind: string;
  
  @Column({
    type: DataType.FLOAT 
  })
  min_value: number;

  @Column({
    type: DataType.FLOAT 
  })
  max_value: number;

  @Column
  remarks: string;

  @Column
  data_type: string;

}
