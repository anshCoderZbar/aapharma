import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { catalogSchema } from "app/common/catalog/validation";
import { CatalogForm } from "components/catalog-form";
import { AddCatalogL1Fn } from "rest/catalog";

export const AddCatalogL1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(catalogSchema) });

  const AddCatalogMutation = AddCatalogL1Fn(reset);

  const onSubmit = (data) => {
    AddCatalogMutation.mutate(data);
  };
  return (
    <CatalogForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      control={control}
      isLoading={AddCatalogMutation?.isPending}
      heading1="Master Category"
    />
  );
};

// <div className="edit_catalog_page mb-4">
//   <div className="catalog_single_page_inputs">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="row">
//         <div className="mb-3 col-md-6">
//           <label htmlFor="heading" className="form-label">
//             Heading
//           </label>
//           <FormInput
//             type="text"
//             name="heading"
//             placeholder="Heading"
//             {...register("heading")}
//           />
//           {errors?.heading && (
//             <p className="errorMessage">{errors?.heading?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-6">
//           <label htmlFor="hba" className="form-label">
//             Description
//           </label>
//           <TextEditor
//             control={control}
//             name="description"
//             {...register("description")}
//           />
//           {errors?.description && (
//             <p className="errorMessage">{errors?.description?.message}</p>
//           )}
//         </div>

//         <div className="mb-3 col-md-4">
//           <label htmlFor="productClass" className="form-label">
//             Product Class
//           </label>
//           <FormInput
//             type="text"
//             name="productClass"
//             placeholder="Product Class"
//             {...register("productClass")}
//           />
//           {errors?.productClass && (
//             <p className="errorMessage">{errors?.productClass?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="clogP" className="form-label">
//             ClogP
//           </label>
//           <FormInput
//             type="text"
//             name="clogP"
//             placeholder="ClogP"
//             {...register("clogP")}
//           />
//           {errors?.clogP && (
//             <p className="errorMessage">{errors?.clogP?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="mv" className="form-label">
//             MV
//           </label>
//           <FormInput
//             type="text"
//             name="mv"
//             placeholder="MV"
//             {...register("mv")}
//           />
//           {errors?.mv && (
//             <p className="errorMessage">{errors?.mv?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="hbd" className="form-label">
//             HBD
//           </label>
//           <FormInput
//             type="text"
//             name="hbd"
//             placeholder="HBD"
//             {...register("hbd")}
//           />
//           {errors?.hbd && (
//             <p className="errorMessage">{errors?.hbd?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="hba" className="form-label">
//             HBA
//           </label>
//           <FormInput
//             type="text"
//             name="hba"
//             placeholder="HBA"
//             {...register("hba")}
//           />
//           {errors?.hba && (
//             <p className="errorMessage">{errors?.hba?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="rotb" className="form-label">
//             Rotb
//           </label>
//           <FormInput
//             type="text"
//             name="rotb"
//             placeholder="Rotb"
//             {...register("rotb")}
//           />
//           {errors?.rotb && (
//             <p className="errorMessage">{errors?.rotb?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="fap3" className="form-label">
//             Fap3
//           </label>
//           <FormInput
//             type="text"
//             name="fap3"
//             placeholder="Fap3"
//             {...register("fap3")}
//           />
//           {errors?.fap3 && (
//             <p className="errorMessage">{errors?.fap3?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-md-4">
//           <label htmlFor="price" className="form-label">
//             Price
//           </label>
//           <FormInput
//             type="text"
//             name="price"
//             placeholder="Price"
//             {...register("price")}
//           />
//           {errors?.price && (
//             <p className="errorMessage">{errors?.price?.message}</p>
//           )}
//         </div>
//         <div className="mb-3 col-12">
//           <input type="submit" value="submit" className="input_submit" />
//         </div>
//       </div>
//     </form>
//   </div>
// </div>
