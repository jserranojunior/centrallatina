package models

//ViewCategoriesAndBillsMonth struct export
type ViewCategoriesAndBillsMonth struct {
	CategoriasContasAPagars []CategoriasContasAPagars
	TotalCategories         float64
	SomaFormaPagamento      map[string]float64
}
