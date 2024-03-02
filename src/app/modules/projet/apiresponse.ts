import { Projet } from "src/app/models/dtos/responses/projet";

export interface ApiResponse {
        success: boolean;
        data?: {
          content: Projet[];
        };
      }
      