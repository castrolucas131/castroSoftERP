/* eslint-disable @typescript-eslint/naming-convention */
export class Product {
  public _id: number;
  public codigo: number;
  public codBarra: string;
  public tipo: string;
  public grupo: number;
  public unidade: string;
  public aliq_icm: number;
  public aliq_pis: number;
  public aliq_cof: number;
  public pr_custo: number;
  public margem: number;
  public pr_venda: number;
  public qtd_atual: number;
  public qtd_min: number;
  public ncm: string;
  public ativo: string;
  public pr_custo_anterior: number;
  public pr_venda_anterior: number;
  public ult_compra: number;
  public ult_compra_anterior: number;
  public empresa: number;
  public dt_cadastro: string;
  public fracionar: string;
  public descricao: string;
  public action: string; // I = Insert | U = Update
  public sync: string; // S = Sincronizado | N = Nao Sincronizado
}
