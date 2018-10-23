class PagesController < ApplicationController
  def home
    refresh_gigs
    @coming_gigs = Gig.where(passed: 'false').sort_by { |gig| gig.date }
  end
end
