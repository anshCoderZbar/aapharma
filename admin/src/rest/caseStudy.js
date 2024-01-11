import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";

export const GetCaseStudyTabsMutation = () => {
  const caseStudy = useQuery({
    queryKey: ["all-case-study-tabs"],
    queryFn: () => client.caseStudy.getCaseStudy(),
  });
  return caseStudy;
};

export const GetSingleCaseStudyTabsMutation = (data) => {
  const singleCaseStudy = useQuery({
    queryKey: ["single-case-study-tabs"],
    queryFn: () => client.caseStudy.singleCaseStudyTabs(data),
  });
  return singleCaseStudy;
};

export const EditCaseTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const operatingMutation = useMutation({
    mutationFn: (data) => client.caseStudy.editCaseStudyTabs(data),
    onSuccess: () => {
      notify("Data Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["all-case-study-tabs"],
      });
      navigate("/case-study-tabs");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return operatingMutation;
};

export const GetCaseStudyGraphContentMutation = () => {
  const caseStudyGraphContent = useQuery({
    queryKey: ["case-study-graph-content"],
    queryFn: () => client.caseStudy.getCaseStudyGraphContent(),
  });
  return caseStudyGraphContent;
};

export const EditCaseStudyGraphContentMutation = () => {
  const { notify } = useNotifications();
  const editCaseStudyGraphContent = useMutation({
    mutationFn: (data) => client.caseStudy.editCaseStudyGraphContent(data),
    onSuccess: () => {
      notify("Data Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["case-study-graph-content"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editCaseStudyGraphContent;
};

export const GetCaseStudyDiagramMutation = () => {
  const caseStudyDiagram = useQuery({
    queryKey: ["case-study-diagram-content"],
    queryFn: () => client.caseStudy.getCaseStudyDiagramData(),
  });
  return caseStudyDiagram;
};

export const GetSingleCaseDiagramMutation = (data) => {
  const singleCaseStudyDiagram = useQuery({
    queryKey: ["single-case-study-diagram-content"],
    queryFn: () => client.caseStudy.singleCaseStudyDiagramData(data),
  });
  return singleCaseStudyDiagram;
};

export const EditCaseDiagramMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editCaseStudyDiagram = useMutation({
    mutationFn: (data) => client.caseStudy.editCaseStudyDiagramData(data),
    onSuccess: () => {
      notify("Data Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["case-study-diagram-content"],
      });
      navigate("/case-study-diagram");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editCaseStudyDiagram;
};
