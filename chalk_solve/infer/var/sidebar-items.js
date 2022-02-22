initSidebarItems({"enum":[["InferenceValue","The value of an inference variable. We start out as `Unbound` with a universe index; when the inference variable is assigned a value, it becomes bound and records that value. See `EnaVariable` for more details."]],"struct":[["EnaVariable","Wrapper around `chalk_ir::InferenceVar` for coherence purposes. An inference variable represents an unknown term – either a type or a lifetime. The variable itself is just an index into the unification table; the unification table maps it to an `InferenceValue`."]]});