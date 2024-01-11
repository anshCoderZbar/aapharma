import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";

export const GetCaseStudyTabsMutation = () => {
  const caseStudy = useQuery({
    queryKey: ["all-case-study-tabs"],
    queryFn: () => client.caseStudy.getCaseStudy(),
  });
  return caseStudy;
};

export const GetSingleCaseStudyTabsMutation = () => {
  const singleCaseStudy = useMutation({
    mutationFn: (data) => client.caseStudy.singleCaseStudyTabs(data),
    onSuccess: () => {
      return;
    },
    onError: () => {
      return;
    },
  });
  return singleCaseStudy;
};

export const GetCaseStudyGraphContentMutation = () => {
  const caseStudyGraphContent = useQuery({
    queryKey: ["case-study-graph-content"],
    queryFn: () => client.caseStudy.getCaseStudyGraphContent(),
  });
  return caseStudyGraphContent;
};

export const GetCaseStudyDiagramMutation = () => {
  const caseStudyDiagram = useQuery({
    queryKey: ["case-study-diagram-content"],
    queryFn: () => client.caseStudy.getCaseStudyDiagramData(),
  });
  return caseStudyDiagram;
};
