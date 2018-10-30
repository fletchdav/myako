class ApplicationController < ActionController::Base
  def refresh_gigs
    gigs = Gig.all
    gigs.each do |gig|
      if gig.date < Date.today
        gig.passed = true
      else
        gig.passed = false
      end
      gig.save
    end
  end

  def default_url_options
    { host: ENV["HOST"] || "localhost:3000" }
  end
end
